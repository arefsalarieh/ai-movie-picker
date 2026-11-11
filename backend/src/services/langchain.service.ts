import { ChatGoogle } from "@langchain/google/node";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { RecommendationsSchema } from "../schemas/movie.schema";

function getChatModel() {
  const provider = process.env.LLM_PROVIDER ?? "openai";

  if (provider === "google") {
    return new ChatGoogle({
      model: "gemini-3.5-flash-lite",
      temperature: 0.3,
    });
  }

  return new ChatOpenAI({
    model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
    temperature: 0.3,
  });
}

const model = getChatModel();

const promptTemplate = ChatPromptTemplate.fromMessages([
  [
    "system",
    `You are a movie recommendation expert.

Return high-quality recommendations based on:
- user's request
- genre
- mood
- count

Every movie should feel intentional.
Do not recommend only the most obvious titles every time.`,
  ],
  [
    "human",
    `User request: {userPrompt}

Preferences:
- Genre: {genre}
- Mood: {mood}
- Number of movies: {count}`,
  ],
]);

export async function getRecommendations(input: {
  userPrompt: string;
  genre: string;
  mood: string;
  count: number;
}) {
  const chain = promptTemplate.pipe(model);

  const response = await chain.invoke({
    userPrompt: input.userPrompt,
    genre: input.genre,
    mood: input.mood,
    count: input.count,
  });

  console.log(response.text);

  return response.text;
}

const structuredModel = model.withStructuredOutput(RecommendationsSchema);

export async function getStructuredRecommendations(input: {
  userPrompt: string;
  genre: string;
  mood: string;
  count: number;
}) {
  const chain = promptTemplate.pipe(structuredModel);

  const result = await chain.invoke({
    userPrompt: input.userPrompt,
    genre: input.genre,
    mood: input.mood,
    count: input.count,
  });

  console.log(result);

  return result;
}
