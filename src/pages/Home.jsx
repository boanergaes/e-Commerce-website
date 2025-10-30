import Header from "../components/Header"

import { useContext, useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import { ProductContext } from "../App"
import Loading from "../components/Loading"

export default function Home({loading}) {

    const products = useContext(ProductContext)

    if (loading) return <Loading />

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