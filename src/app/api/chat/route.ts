// src/app/api/chat/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Read the chat history and system prompt from the client request
  const { messages, systemPrompt } = await request.json();

  // Get the secret API key from server-side environment variables
  const groqApiKey = process.env.GROQ_API_KEY;

  if (!groqApiKey) {
    return NextResponse.json(
      { error: "Groq API key is not configured on the server." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        // CORRECTED TYPO HERE
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: [
          { role: "system", content: systemPrompt },
          ...messages, // messages from the client
        ],
        model: 'gemma2-9b-it' 
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Groq API Error:", errorData);
      return NextResponse.json(
        { error: `Groq API error: ${errorData.error.message}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || "Sorry, I couldn't get a response.";

    return NextResponse.json({ response: aiResponse });

  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}