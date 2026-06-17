export async function POST(req: Request) {
  const { name, email, phone } = await req.json()

  const params = new URLSearchParams()
  params.append('api_token', 'a98af636848d6ab8cc8ca2d19541e47b')
  params.append('contact_name', name)
  params.append('contact_email', email)
  if (phone) params.append('contact_phone', phone)

  const response = await fetch(
    `https://admin.goeasyai.ca/api/automations/6a32c5d4b7c62/execute?${params.toString()}`,
    {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )

  const data = await response.json()
  return Response.json(data)
}
