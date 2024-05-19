import { GoogleGenerativeAI } from "@google/generative-ai";
import { OPENAI_KEY } from "./constants";

const API_KEY = OPENAI_KEY;

if (!API_KEY) {
  throw new Error("Missing API key for Google Generative AI.");
}

const genAI = new GoogleGenerativeAI(API_KEY);

export default genAI;
