// import

import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

export default function Home() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchProducts() {
        const productList = await fetch('/backend/products.json')
        const data = await productList.json()
        setProducts(data)
        setLoading(false)
    }
    
    useEffect(() => {
        fetchProducts()
    }, [])

    if (loading) return <div className="pt-30">Loading...</div>

    return (
        <div className="flex flex-wrap pt-30">{
            products.map((product) => {
                return <ProductCard key={product.id} image={product.image} prod_name={product.name} rating={product.rating} price_cents={product.priceCents} keywords={product.keywords} />
            })
        }</div>
    )
}