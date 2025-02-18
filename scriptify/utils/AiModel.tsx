const { 
  GoogleGenerativeAI, 
  HarmCategory, 
  HarmBlockThreshold 
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  tools: [{ codeExecution: {} }],
});

const generationConfig = {
  temperature: 1.0,              // More randomness for creative output
  topP: 0.95,                   // More focused responses
  topK: 40,                     // Limits response to a set of top tokens
  maxOutputTokens: 8192,        // Large response size
  responseMimeType: "text/plain", // Ensures clean text response
};

export const chatSession = model.startChat({
  generationConfig,
  history: [],  // Empty history, you can add messages as needed
});
