# langchain-node-chatbot

A simple chatbot which takes chat history from a text file and makes use of LLM to provide responses based on the chat history

#Installation

- Create a .env file and add OPENAI_API_KEY variable in it
- Run `npm i` to install all the dependencies
- Run `node index.js` to run the project.
- In chat.txt file you can create the dummy history you want

#How does this work

- You have all your chat history in chat.txt file. You can modify that to either create your chat history or just talk to the chatbot and it will append to this file
- After you successfully run the project, it will ask you to enter the message to the chatbot in the terminal itself
- This question is fed to bot and it makes use of OpenAI's APIs to first use the chat history as tool and deduce the response based on that.

#What can you improve on this project

1. Create a Frontend for this project where you can show the chat history and new responses.
2. Convert the method of input to an API which receives request params for input.
3. Enable the OpenAI request to do more than just analyze the chat history and search web to general request but ony when requested otherwise it will hallucinate and mess with the chat history.
