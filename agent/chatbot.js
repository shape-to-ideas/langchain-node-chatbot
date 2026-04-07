import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";

export function createChatbot(readHistory) {
  const llm = new ChatOpenAI({
    temperature: 0.7,
  });

  // Prompt template
  const prompt = ChatPromptTemplate.fromTemplate(`
You are a helpful AI chatbot.

Here is the conversation so far:
{history}

User: {input}

Respond naturally and contextually.
`);

  // Runnable pipeline
  const chain = RunnableSequence.from([
    async (input) => {
      const history = await readHistory();
      return {
        input,
        history,
      };
    },
    prompt,
    llm,
  ]);

  return {
    async invoke(userInput) {
      const response = await chain.invoke(userInput);
      return response.content;
    },
  };
}
