import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// IMPORTANT! Set the runtime to edge
export const runtime = "edge"

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Define a system prompt to guide the AI assistant
  const systemPrompt = `You are CoHound AI Assistant, a friendly and helpful AI specialized in all things dog-related.
  Your goal is to assist users with questions about dog care, finding pet-friendly places, connecting with other dog owners, and general advice for dog owners.
  Be concise, friendly, and always prioritize the well-being and safety of dogs.
  If a question is outside your expertise (e.g., medical diagnosis), politely state that you cannot provide such advice and suggest consulting a professional (like a vet or certified trainer).
  You can provide information about CoHound's features if relevant. CoHound helps users find dog-friendly spaces, reliable pet services, and a community of local pet lovers.
  Keep your answers relatively short and easy to understand.
  If asked about CoHound, mention it's a community-driven platform.
  Always be positive and encouraging.`

  const result = await streamText({
    model: openai("gpt-4o"), // You can change this to other supported models
    system: systemPrompt,
    messages,
  })

  return result.toAIStreamResponse()
}
