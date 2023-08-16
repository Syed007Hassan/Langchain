// import { OpenAI } from "langchain/llms/openai";
// import { HNSWLib } from "langchain/vectorstores/hnswlib";
// import { OpenAIEmbeddings } from "langchain/embeddings/openai";
// import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
// import * as fs from "fs";
// import {
//   VectorStoreInfo,
//   VectorStoreToolkit,
//   createVectorStoreAgent,
// } from "langchain/agents";
// import { configDotenv } from "dotenv";

// configDotenv();

// const model = new OpenAI({ temperature: 0 });
// /* Load in the file we want to do question answering over */
// const text = fs.readFileSync("./Solid_Principles.txt", "utf8");
// /* Split the text into chunks using character, not token, size */
// const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
// const docs = await textSplitter.createDocuments([text]);
// /* Create the vectorstore */
// const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());

// /* Create the agent */
// const vectorStoreInfo: VectorStoreInfo = {
//   name: "solid_principles",
//   description: "A vectorstore of the solid principles",
//   vectorStore,
// };

// const toolkit = new VectorStoreToolkit(vectorStoreInfo, model);
// const agent = createVectorStoreAgent(model, toolkit);

// const input = "What is the single responsibility principle?";
// console.log(`Executing: ${input}`);

// const result = await agent.call({ input });
// console.log(`Got output ${result.output}`);
// console.log(
//   `Got intermediate steps ${JSON.stringify(result.intermediateSteps, null, 2)}`
// );

console.log("Hello world");
