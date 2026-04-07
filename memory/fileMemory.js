import fs from "fs-extra";
import path from "path";

const filePath = path.resolve("data/chat.txt");

// Ensure file exists
export async function initMemory() {
  await fs.ensureFile(filePath);
}

// Read chat history
export async function readHistory() {
  const data = await fs.readFile(filePath, "utf-8");
  return data || "";
}

// Append new message
export async function appendToHistory(role, message) {
  const entry = `${role}: ${message}\n`;
  await fs.appendFile(filePath, entry);
}
