const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function analyzeArtwork(content) {
  // Exemplo de integração com OpenAI
  const prompt = `Avalie esta obra artisticamente e dê críticas construtivas:\n${content}`;
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 200
  });
  return [response.choices[0].message.content];
}

module.exports = { analyzeArtwork };
