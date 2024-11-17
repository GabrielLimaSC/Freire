import OpenAI from "openai";
import { Dispatch, SetStateAction } from "react";

const openai = new OpenAI({
  apiKey:
    "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",
  dangerouslyAllowBrowser: true,
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
