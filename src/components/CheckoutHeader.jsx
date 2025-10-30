import { useContext } from "react";
import { Link } from "react-router-dom";
import { PaymentSummaryContext } from "../App";

export default function CheckoutHeader() {
    const paymentSummary = useContext(PaymentSummaryContext)

    return (
        <header className="checkout-header py-3 px-[30px]">
            <div className="header-content max-w-[1100px] flex justify-between items-center mx-auto">
                <div className="checkout-header-left-section">
                    <Link to="/">
                        <img className="logo w-[177.225px]" src="images/logo.png" />
                        <img className="mobile-logo hidden" src="images/mobile-logo.png" />
                    </Link>
                </div>

                <div className="checkout-header-middle-section text-2xl font-medium">
                    Checkout (<Link className="return-to-home-link text-[#198754]" to="/">{paymentSummary.totQuantity} items</Link>)
                </div>

                <div className="checkout-header-right-section">
                    <img className="w-9" src="images/icons/checkout-lock-icon.png" />
                </div>
            </div>
        </header>

    )
}