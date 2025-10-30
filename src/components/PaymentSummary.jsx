import { useContext } from "react"
import { PaymentSummaryContext } from "../App"
import { roundToTwo } from "../utils/utils"

const TAX = 0.1

export default function PaymentSummary() {
    const paymentSummary = useContext(PaymentSummaryContext)

    const totCost = roundToTwo(paymentSummary.totCost / 100)
    const totShipping = roundToTwo(paymentSummary.totShipping / 100)
    const estimatedTax = roundToTwo((totCost + totShipping) * TAX)
    const totWithTax = roundToTwo(totCost + totShipping + estimatedTax)

    return (
        <div className="payment-summary flex flex-col gap-1.5 border border-gray-300 rounded-lg p-4 h-fit">
            <div className="payment-summary-title font-bold text-[1.2rem] mb-1.5">
              Payment Summary
            </div>

            <div className="payment-summary-row flex justify-between">
              <div>Items ({paymentSummary.totQuantity}):</div>
              <div className="payment-summary-money">${totCost}</div>
            </div>

            <div className="payment-summary-row flex justify-between">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money border-b border-b-gray-300 pb-2">${totShipping}</div>
            </div>

            <div className="payment-summary-row subtotal-row flex justify-between">
              <div>Total before tax:</div>
              <div className="payment-summary-money">${roundToTwo(totCost + totShipping)}</div>
            </div>

            <div className="payment-summary-row flex justify-between border-b border-b-gray-300 pb-2">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">${estimatedTax}</div>
            </div>

            <div className="payment-summary-row total-row flex justify-between text-green-700 font-bold text-[1.2rem] py-2">
              <div>Order total:</div>
              <div className="payment-summary-money">${totWithTax}</div>
            </div>

            <button className="place-order-button button-primary bg-green-700 rounded-md p-1.5 text-white hover:bg-[#198754bf] active:bg-[#19875480] transition cursor-pointer">
              Place your order
            </button>
        </div>
    )
}