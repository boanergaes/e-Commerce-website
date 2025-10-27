import { useEffect } from "react"
import CartCard from "../components/CartCard"

export default function Checkout({cart, loading, fetcher}) {
    
    useEffect(() => {
        fetcher()
    }, [])

    if (loading) return <div className="pt-30">Loading...</div>

    return (
        <div className="pt-20">
            {cart.map((item) => {
                return <CartCard productId={item.productId} quantity={item.quantity} deliveryOptionId={item.deliveryOptionId} />
            })}
        </div>
    )
}