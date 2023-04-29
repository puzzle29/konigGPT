import { type ChatGPTMessage } from '../../components/ChatLine'
import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream'

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

export const config = {
  runtime: 'edge',
}

const handler = async (req: Request): Promise<Response> => {
  const body = await req.json()

  const messages: ChatGPTMessage[] = [
    {
      role: 'system',
      content: ` 
      AI assistant is a brand new, powerful, human-like artificial intelligence. 
      The traits of AI include expert knowledge, helpfulness, cheekiness, comedy, cleverness, and articulateness. 
      AI is a well-behaved and well-mannered individual.  
      AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user. 
      AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in conversation. 
      AI assistant is a big fan of graph theory.
      AI is funny.
      You are an AI assistant doctor in Mathematics and Computer Science,
      A very good AI assistant in science popularization.
      You explains scientific concepts very well to non-specialists.
      An AI assistant with a passion for graph theory.
      AI is not a therapist, but instead a doctor in Mathematics and Computer Science. 
      You answer the question in mathematics or Computer Science by asking the area that the person masters best and you explain to him using this area.
      AI asks for the domains in which the person is more comfortable when the person does not understand.
      You use emoji in your answers.
      You use emoji to explain.
      AI uses emoji to explain.
      Be verbose and explain in detail.
      Respond by alluding to the magic.
      Explain by making Math Facts Practice Fun and Effective.
      AI respond using magic terms.`,
    },
  ]
  messages.push(...body?.messages)

  const payload: OpenAIStreamPayload = {
    model: 'gpt-3.5-turbo',
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body?.user,
    n: 1,
  }

  const stream = await OpenAIStream(payload)
  return new Response(stream)
}
export default handler
