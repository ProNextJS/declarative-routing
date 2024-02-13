import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getRouteName(routeName: string) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `You are a JavaScript programming assistant.
Your job is to return the name for a single variable in camel case for a given URL route as VARIABLE_NAME.
For example:
given /api/product/[productId] return ProductById
given / return Home
given /settings return Settings
given /settings/user return UserSettings
given /movies return Movies
given /api/movies return MoviesAPI
given /api/movies/[movieId] return MovieByIdAPI
given /api/movies/[movieId]/reviews return MovieReviewsAPI
---BEGIN FORMAT TEMPLATE---
VARIABLE_NAME
---END FORMAT TEMPLATE---
`,
      },
      {
        role: "user",
        content: routeName,
      },
    ],
    model: "gpt-3.5-turbo",
  });
  return chatCompletion.choices[0].message.content;
}
