import { OpenAI } from "langchain/llms/openai";
import { SqlDatabase } from "langchain/sql_db";
import { createSqlAgent, SqlToolkit } from "langchain/agents/toolkits/sql";
import { DataSource } from "typeorm";
import { configDotenv } from "dotenv";

// In this example language model is used to generate SQL queries
// for a database. The database is a sqlite database with the
// Northwind database schema. The agent is trained on a dataset
// of SQL queries and their corresponding natural language
// descriptions. The agent is then used to generate SQL queries
// from natural language descriptions.


export const run = async () => {

  configDotenv();

  const datasource = new DataSource({
    type: "sqlite",
    database: "./data/northwind.db",
  });
  const db = await SqlDatabase.fromDataSourceParams({
    appDataSource: datasource,
  });

  const toolkit = new SqlToolkit(db);
  const model = new OpenAI({
    temperature: 0,
  });
  const executor = createSqlAgent(model, toolkit);

  const input = `Get all the employees who were hired after 2005?`;

  console.log(`Executing with input "${input}"...`);

  const result = await executor.call({ input });

  console.log(`Got output ${result.output}`);

  console.log(
    `Got intermediate steps ${JSON.stringify(
      result.intermediateSteps,
      null,
      2
    )}`
  );

  await datasource.destroy();
};



run();