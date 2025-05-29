import { onRequest } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2";
import corsModule from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

setGlobalOptions({ region: "us-central1" });


const cors = corsModule({ origin: true });
const genAI = new GoogleGenerativeAI("AIzaSyDPTTuA5NsqWSmRRvGJg19lC9GFXohMYf0");

export const chatWithGemini = onRequest(async (req, res) => {
  try {
    await new Promise((resolve, reject) => {
      cors(req, res, (err) => (err ? reject(err) : resolve()));
    });

    const { message, history } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const chat = model.startChat({ history: history || [] });

    const result = await chat.sendMessage(message);
    const reply = result.response.text();

    res.status(200).json({ reply });
  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).json({ error: "Failed to fetch Gemini response." });
  }
});
