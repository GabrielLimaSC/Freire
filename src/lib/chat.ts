"use server";

import OpenAI from "openai";

const key = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: key,
});

export async function MandarMensagem(mensagem: string) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Você deve ajudar o professor com tudo com o que ele te perguntar",
      },
      { role: "user", content: mensagem },
    ],
    model: "gpt-4o",
  });

  const response = String(completion.choices[0].message.content);

  return response;
}
