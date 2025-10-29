import { useEffect, useState } from "react"
import CartCard from "../components/CartCard"
import PaymentSummary from "../components/PaymentSummary"
import CheckoutHeader from "../components/CheckoutHeader"

export default function Checkout({cart, loading, fetcher}) {
    const [deliveryOptions, setDeliveryOptions] = useState([])

    useEffect(() => {
        fetcher()
    }, [])

    useEffect(() => {
        fetch('/backend/deliveryOptions.json')
            .then((response) => response.json())
            .then((data) => {
                setDeliveryOptions(data)
                // console.log('try:', deliveryOptions.find((item) => item.id == deliveryOption))
            })
    }, [])
    console.log(deliveryOptions)

    if (loading) return <div className="pt-30">Loading...</div>

    return (
        <>
            <CheckoutHeader />
            <div className="checkout-page py-20 max-w-[1100px] ml-auto mr-auto px-[30px]">
                <h1 className="page-title font-bold text-2xl pb-6">Review your order</h1>
                <div className="checkout-grid grid grid-cols-[1fr_350px] gap-4">
                    <div className="order-summary flex flex-col gap-4">
                        {cart.map((item) => {
                            // const delivery = deliveryOptions.find((itemm) => itemm.id == item.deliveryOptionId)
                            // const deliveryId = delivery ? delivery.priceCents : null
                            // console.log('del id:', deliveryId)
                            return <CartCard key={item.productId} productId={item.productId} quantity={item.quantity} deliveryOptionId={item.deliveryOptionId} deliveryOptions={deliveryOptions} />
                        })}
                    </div>
                    <PaymentSummary />
                </div>
            </div>
        </>
    )
}