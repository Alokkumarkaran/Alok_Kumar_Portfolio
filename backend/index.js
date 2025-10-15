require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const pdfParse = require('pdf-parse');
const { Configuration, OpenAIApi } = require('openai');
const contactRouter = require('./contact');  // <-- import the router

// 1️⃣ Initialize Express app
const app = express();

// 2️⃣ Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: 'uploads/' });

// 3️⃣ OpenAI setup
const OPENAI_KEY = process.env.OPENAI_API_KEY || '';
let openai = null;
if (OPENAI_KEY) {
  const configuration = new Configuration({ apiKey: OPENAI_KEY });
  openai = new OpenAIApi(configuration);
}

// 4️⃣ Helper functions
function countWords(str) {
  return str.split(/\s+/).filter(Boolean).length;
}

function simpleScore(text) {
  const keywords = ['react','node','express','python','docker','sql','mongodb','aws','spark','power bi','tableau'];
  const kMatches = keywords.reduce((acc, k) => acc + (text.toLowerCase().includes(k) ? 1 : 0), 0);
  const actions = ['led','built','designed','developed','implemented','optimized','improved'];
  const aMatches = actions.reduce((acc, a) => acc + (text.toLowerCase().includes(a) ? 1 : 0), 0);
  const lenScore = Math.min(30, Math.floor(countWords(text) / 20));
  const score = Math.min(95, 40 + kMatches*6 + aMatches*5 + lenScore);
  return { score, highlights: `${kMatches} tech keywords found, ${aMatches} action verbs`, suggestions: 'Add quantified achievements and tailor to job description' };
}

// 5️⃣ Resume analysis route
app.post('/api/analyze-resume', upload.single('file'), async (req, res) => {
  if(!req.file) return res.status(400).json({ error: 'No file uploaded' });
  try {
    const buffer = fs.readFileSync(req.file.path);
    let text = '';

    try {
      const data = await pdfParse(buffer);
      text = data.text || '';
    } catch(e) {
      text = buffer.toString('utf-8');
    }

    if(openai){
      const prompt = `You are an expert resume reviewer. Give a JSON response with keys: score (0-100), highlights (short), suggestions (short). Resume text:\n${text}`;
      const response = await openai.createCompletion({ model: 'text-davinci-003', prompt, max_tokens: 300 });
      const out = response.data.choices[0].text.trim();
      try {
        const parsed = JSON.parse(out);
        return res.json(parsed);
      } catch(err) {
        // fallback to simple scorer
      }
    }

    const result = simpleScore(text);
    return res.json(result);

  } catch(err) {
    console.error(err);
    return res.status(500).json({ error: 'Analysis failed' });
  } finally {
    if(req.file && req.file.path) fs.unlink(req.file.path, ()=>{});
  }
});

// 6️⃣ Contact form route
app.use('/api/contact', contactRouter);

// 7️⃣ Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Resume analyzer backend running on port ${PORT}`));
