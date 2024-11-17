import OpenAI from "openai";
import { Dispatch, SetStateAction } from "react";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
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
