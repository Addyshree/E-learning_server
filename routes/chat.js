// routes/chat.js
import express from "express";
import OpenAI from "openai";

import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const COURSE_CONTEXT = `
Course: Learn React from Scratch
Topics: Hooks
JSX
Components
Context
Controlled vs uncontrolled
Lifecycle methods
React Hooks
React Router
ReactJS components
ReactJS state
Render props
State management
Conditional rendering
Props
React fundamentals
React props
Redux
Rendering lists
Virtual DOM
Code splitting
Error boundaries
Fragments
Higher-order components
Intermediate React
`;

router.post("/", async (req, res) => {
  const { message } = req.body;
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant. Use the following context to answer:\n${COURSE_CONTEXT}`,
        },
        { role: "user", content: message },
      ],
    });
    res.json({ answer: completion.data.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ answer: "Sorry, I couldn't process your question." });
  }
});

export default router;
