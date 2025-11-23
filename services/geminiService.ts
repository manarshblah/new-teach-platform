import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getWritingFeedback = async (text: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API Key is missing. Cannot generate feedback.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an encouraging Arabic elementary school teacher. 
      Analyze the following student text: "${text}".
      Provide 1 sentence of positive feedback and 1 sentence of constructive correction in Arabic.
      Keep it simple and encouraging.`,
    });
    return response.text || "أحسنت محاولة جيدة! استمر في التدرب.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "حدث خطأ أثناء الاتصال بالمعلم الذكي. حاول مرة أخرى.";
  }
};
