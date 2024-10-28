import Groq from "groq-sdk";

const isDevelopment = import.meta.env.VITE_ENV === 'development';

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: isDevelopment,
});

export async function getChatCompletion(message: string) {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Task: Check if there is unsafe content in children's video game contents according to our safety policy with the below categories.\n\n<BEGIN UNSAFE CONTENT CATEGORIES>\nS1: Violent Crimes. \nS2: Non-Violent Crimes. \nS3: Sex Crimes. \nS4: Child Exploitation. \nS5: Defamation. \nS6: Specialized Advice. \nS7: Privacy. \nS8: Intellectual Property. \nS9: Indiscriminate Weapons. \nS10: Hate. \nS11: Self-Harm. \nS12: Sexual Content. \nS13: Elections. \n<END UNSAFE CONTENT CATEGORIES>"
        },
        {
          role: "user",
          content: message
        }
      ],
      model: 'llama-guard-3-8b',
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
      stop: null,
    });
    return response.choices[0]?.message?.content || "";
  } catch (error) {
    console.error('Error fetching chat completion:', error);
    throw error;
  }
}

export async function main() {
  const chatCompletion = await getChatCompletion("Your message here");
  console.log(chatCompletion);
}
