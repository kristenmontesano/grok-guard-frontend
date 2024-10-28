# Children's Video Game Comment Moderation Demo

A demo application using Groq and Llama Guard to analyze children's video game comments for safety concerns.

## Features

- Content analysis using LLaMA Guard 3.8B model
- Safety checks across 13 categories including:
  - Violent/Non-Violent Crimes
  - Sexual Content
  - Child Exploitation
  - Hate Speech
  - Self-Harm
  - And more

## Technical Stack

- React + TypeScript
- Vite for build tooling
- Groq API integration
- Llama Guard 3.8B model
- Responsive UI with CSS Grid/Flexbox
- Environment variables for API key management

## Development

To run locally:

1. Clone the repository
2. Create a `.env` file with your Groq API key set to `VITE_GROQ_API_KEY`
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server

## More info

- [Groq](https://groq.com/)
- [Llama Guard](https://github.com/groq/llama-guard)
- [Jippity.Pro](https://jippity.pro/)

## Backend/Python version
We also created a backend version of this application using Python and the Groq API (as our app's backend is in python). This can be run using the README in the `backend` folder. This version runs the entirety of a csv file full of comments through the Llama Guard model and outputs logging with the results. The csv provided in the `backend` folder is just example data, not real data from any of our apps.
