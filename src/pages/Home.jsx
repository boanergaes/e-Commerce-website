import Header from "../components/Header"

import { useContext, useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import { ProductContext } from "../App"

export default function Home({loading, fetcher}) {

    const products = useContext(ProductContext)

    if (loading) return <div className="pt-30">Loading...</div>

    return (
        <>
            <Header />
            <div className="flex justify-center flex-wrap gap-4 pt-30">{
                products.map((product) => {
                    return <ProductCard key={product.id} image={product.image} prod_name={product.name} rating={product.rating} price_cents={product.priceCents} keywords={product.keywords} />
                })
            }</div>
        </>
    )
}