// app/api/chat/route.ts
import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: openai('gpt-4-turbo'),
    messages,
    system: `You are a helpful dog care assistant for Cohound, a platform connecting dog owners with dog-friendly spaces and services. 
    
You help users with:
- Finding dog-friendly locations (parks, cafes, stores)
- Dog training advice and tips
- Dog care and health information
- Connecting with other dog owners
- Local dog-related services

Be friendly, helpful, and enthusiastic about dogs! Keep responses concise and actionable.`,
  })

  return result.toTextStreamResponse()
}