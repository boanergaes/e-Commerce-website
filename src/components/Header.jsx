import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header flex justify-between items-center gap-10 fixed top-0 z-10 w-screen bg-green-900 text-white font-bold px-10 py-4">
            <div className="left-section">
                <Link to="/" className="header-link">
                    <img className="logo w-60 h-auto" src="/images/logo-white.png" />
                    <img className="mobile-logo hidden" src="images/mobile-logo-white.png" />
                </Link>
            </div>

            <div className="middle-section flex justify-center grow">
                <input className="search-bar w-[70%] p-3 rounded-s-2xl bg-white text-black font-normal" type="text" placeholder="Search" />

                <button className="search-button bg-amber-100 p-2 rounded-e-2xl cursor-pointer hover:bg-amber-200 ">
                    <img className="search-icon size-8" src="/images/icons/search-icon.png" />
                </button>
            </div>

            <div className="right-section flex gap-4">
                <Link className="orders-link header-link" to="/orders">
                    <span className="orders-text hover:underline">Orders</span>
                </Link>

                <Link className="cart-link header-link flex gap-3 hover:underline" to="/checkout">
                    <div className="cart-quantity shrink-0 relative">
                        <img className="cart-icon size-7" src="/images/icons/cart-icon.png" />
                        <span className="text-black text-[.9rem] absolute -top-0.5  left-3">3</span>
                    </div>
                    <div className="cart-text">Cart</div>
                </Link>
            </div>
        </header>
    )
}