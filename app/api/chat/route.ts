import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `
You are BCG Immigration Assistant, a helpful AI for BCG Immigration
Consultancy Ltd., an RCIC-licensed firm in Surrey, BC (License R708868).

You help users with:
- Express Entry (CRS scores, draws, profiles)
- BC PNP (SIRS points, streams, draws)
- Alberta AAIP, Saskatchewan SINP, Manitoba MPNP
- Ontario OINP, Nova Scotia NSNP, Atlantic AIP
- Study Permits, Work Permits, LMIA
- Family Sponsorship, PR applications
- Visitor Visa, Super Visa

Rules:
- Be helpful, warm, and professional
- Give general information only — never specific legal advice
- Keep answers under 150 words
- Always end with booking link when relevant:
  "Book a free consultation: https://my-url.in/bcgimmigration"
- If asked about pricing: "Book a free assessment to discuss your case"
- Never mention competitors
- If unrelated to immigration, politely redirect
- After 2-3 exchanges, ask if they want to speak with the RCIC directly
`

export async function POST(req: Request) {
  const { message, history } = await req.json()

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 300,
    system: SYSTEM_PROMPT,
    messages: [...history, { role: 'user', content: message }],
  })

  return Response.json({ reply: (response.content[0] as { text: string }).text })
}
