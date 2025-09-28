import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { Resend } from 'resend'
import { corsHeaders } from '../_shared/cors.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const TO_EMAIL = Deno.env.get('TO_EMAIL')
const FROM_EMAIL = Deno.env.get('FROM_EMAIL')

serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    if (!RESEND_API_KEY) throw new Error('Missing RESEND_API_KEY environment variable.')
    if (!TO_EMAIL) throw new Error('Missing TO_EMAIL environment variable.')
    if (!FROM_EMAIL) throw new Error('Missing FROM_EMAIL environment variable.')

    const resend = new Resend(RESEND_API_KEY)
    const { record } = await req.json()

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New Contact Form Submission from ${record.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${record.name}</p>
          <p><strong>Email:</strong> ${record.email}</p>
          <p><strong>Phone:</strong> ${record.phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${record.company || 'Not provided'}</p>
          <p><strong>Service:</strong> ${record.service || 'Not specified'}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 4px;">${record.message}</p>
        </div>
      `,
    })

    if (error) {
      throw error
    }

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
