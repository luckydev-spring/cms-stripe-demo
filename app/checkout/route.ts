import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
})

export async function POST(req: Request) {
  const { productId } = await req.json()

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: { name: 'Sample Product' },
        unit_amount: 12000,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: 'http://localhost:3000/?success=true',
    cancel_url: 'http://localhost:3000/?canceled=true',
  })

  return NextResponse.json({ sessionId: session.id })
}