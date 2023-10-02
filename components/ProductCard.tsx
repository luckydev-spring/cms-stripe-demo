import Link from "next/link"

export default function ProductCard({ product }: any) {
  return (
    <Link href={\`/product/\${product.id}\`} className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price / 100}</p>
      </div>
    </Link>
  )
}