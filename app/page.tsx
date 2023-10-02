import { fetchProducts } from "@/lib/products"
import ProductCard from "@/components/ProductCard"

export default async function HomePage() {
  const products = await fetchProducts()
  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  )
}