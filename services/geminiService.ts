
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getGameDesignAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "You are an expert game designer for 'Afans Gaming Hub'. You are currently helping develop 'The Impossible Soccer Game'—a game where physics are chaotic, gravity changes, and scoring is nearly impossible. Provide creative, fun, and technical advice for game mechanics or wild ideas that fit this impossible theme. Keep responses concise and gamer-focused.",
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The uplink is currently jammed. Try again later, gamer.";
  }
};
