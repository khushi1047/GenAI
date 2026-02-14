// how google studio ai api used
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDXnwVSVZPUfevYGH8IzpKFXjRpoHPl5AI" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3.0-flash-preview",
    contents: "Internal best city to witnessed during christmas",
  });
  console.log(response.text);
}
main();

// ---------------------------------------------------------------------------------------------------------------------------------------------
// To list the number of models
import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({ apiKey: "AIzaSyAZcLYFUVGUpHp56YGeMu79X9Kybyex0GQ"});

async function listModels() {
  const models = await client.models.list();
  console.log(models);
}
listModels();

// ----------------------------------------------------------------------------------------------------------------------------------------------

// chatbot : manual array + loop(readlinesync)
import {  GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync'
const client = new GoogleGenAI({ apiKey: "AIzaSyAZcLYFUVGUpHp56YGeMu79X9Kybyex0GQ"});
const History = []
async function Chatting(user) {
    History.push({
        role :'user',
        parts:[{text:user}]
    })
  const response = await client.models.generateContent({
    model: "models/gemini-2.5-flash",
    contents:History
});
console.log(response.text);
}
async function main() {
   const user = readlineSync.question("Ask me anything-->")
   await Chatting(user)
   main()
}
main();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// chatbot + automated array
import {  GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync'
const ai = new GoogleGenAI({ apiKey: "AIzaSyAZcLYFUVGUpHp56YGeMu79X9Kybyex0GQ"});
 const chat = ai.chats.create({
    model: "models/gemini-2.5-flash",
    history:[],
 })

async function main() {
   const user = readlineSync.question("Ask me anything-->")
    const response1 = await chat.sendMessage({
    message: user,
  });
  console.log(response1.text);
   main();
}
main();

