import dotenv from "dotenv";
import readline from "readline";
import { createChatbot } from "./agent/chatbot.js";
import {
  initMemory,
  appendToHistory,
  readHistory,
} from "./memory/fileMemory.js";

dotenv.config();

async function run() {
  await initMemory();

  const chatbot = createChatbot(readHistory);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = () => {
    rl.question("\nYou: ", async (input) => {
      if (input.toLowerCase() === "exit") {
        rl.close();
        return;
      }

      await appendToHistory("User", input);

      const response = await chatbot.invoke(input);

      console.log("\nBot:", response);

      await appendToHistory("Bot", response);

      ask();
    });
  };

  ask();
}

run();
