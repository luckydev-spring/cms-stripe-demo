import { fetchProducts } from "@/lib/products"
import CheckoutButton from "@/components/CheckoutButton"

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product = (await fetchProducts()).find(p => p.id === params.id)
  if (!product) return <div>Product not found</div>

  return (
    <div className="p-6">
      <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded-xl" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-xl font-semibold mt-2">${product.price / 100}</p>
      <CheckoutButton productId={product.id} />
    </div>
  )
}