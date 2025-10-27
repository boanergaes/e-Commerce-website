import { useEffect } from "react"
import CartCard from "../components/CartCard"
import PaymentSummary from "../components/PaymentSummary"

export default function Checkout({cart, loading, fetcher}) {
    
    useEffect(() => {
        fetcher()
    }, [])

    if (loading) return <div className="pt-30">Loading...</div>

    return (
        <div className="checkout-page pt-20 max-w-[1100px] ml-auto mr-auto px-[30px]">
            <h1 class="page-title font-bold text-2xl">Review your order</h1>
            <div className="checkout-grid grid grid-cols-[1fr_350px] gap-4">
                <div className="order-summary flex flex-col gap-4">
                    {cart.map((item) => {
                        return <CartCard key={item.productId} productId={item.productId} quantity={item.quantity} deliveryOptionId={item.deliveryOptionId} />
                    })}
                </div>
                <PaymentSummary />
            </div>
        </div>
    )
}