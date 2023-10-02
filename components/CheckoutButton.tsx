'use client'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

export default function CheckoutButton({ productId }: { productId: string }) {
  const handleCheckout = async () => {
    const res = await fetch('/checkout', {
      method: 'POST',
      body: JSON.stringify({ productId }),
    })
    const data = await res.json()
    const stripe = await stripePromise
    stripe?.redirectToCheckout({ sessionId: data.sessionId })
  }

  return <button onClick={handleCheckout} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Buy Now</button>
}