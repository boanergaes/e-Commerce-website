import { createContext, useContext, useEffect, useState } from "react"
import CartCard from "../components/CartCard"
import PaymentSummary from "../components/PaymentSummary"
import CheckoutHeader from "../components/CheckoutHeader"
import { CartContext, DeliveryOptionsContext } from "../App"
import Loading from "../components/Loading"



export default function Checkout({loading}) {
    const cart = useContext(CartContext)

    if (loading) return <Loading />

    return (
        <>
            <CheckoutHeader />
            <div className="py-20 max-w-[1100px] ml-auto mr-auto px-[30px]">
                <h1 className="font-bold text-2xl pb-6">Review your order</h1>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-4">
                    <div className="flex flex-col gap-4">
                        {cart.map((item) => {
                            return <CartCard key={item.productId} productId={item.productId} quantity={item.quantity} deliveryOptionId={item.deliveryOptionId} />
                        })}
                    </div>
                    <PaymentSummary />
                </div>
            </div>
        </>
    )
}