const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const generateAnswer = async (question, context) => {
  const prompt = `
Answer the question based only on the context below.

Context:
${context}

Question:
${question}
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
};

module.exports = generateAnswer;