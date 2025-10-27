import { useContext } from "react"
import { ProductContext } from "../App"

export default function CartCard({productId, quantity, deliveryOptionId}) {
    const products = useContext(ProductContext)
    const product = products.find(prod => prod.id == productId)

    return (
        <div className="cart-item-container flex flex-col gap-3 border border-gray-300 p-4 rounded-lg">
            <div className="delivery-date text-green-700 text-xl font-bold">
              Delivery date: Tuesday, June 21
            </div>

            <div className="cart-item-details-grid grid grid-cols-[100px_1fr_1fr] gap-8">
              <img className="product-image" src={`/${product.image}`} />

              <div className="cart-item-details">
                <div className="product-name font-bold">
                  {product.name}
                </div>
                <div className="product-price font-bold">
                  {`$${ (product.priceCents/100) }`}
                </div>
                <div className="product-quantity flex gap-2">
                  <span>
                    Quantity: <span className="quantity-label">{quantity}</span>
                  </span>
                  <span className="update-quantity-link link-primary cursor-pointer text-green-700 hover:text-green-500 active:text-green-400 transition">
                    Update
                  </span>
                  <span className="delete-quantity-link link-primary cursor-pointer text-green-700 hover:text-green-500 active:text-green-400 transition">
                    Delete
                  </span>
                </div>
              </div>

              <div className="delivery-options">
                <div className="delivery-options-title font-bold">
                  Choose a delivery option:
                </div>

                <div className="delivery-option flex gap-2">
                  <input type="radio" className="delivery-option-input" name={`delivery-option-${productId}`} />
                  
                  <div>
                    <div className="delivery-option-date font-medium">
                      Tuesday, June 21
                    </div>
                    <div className="delivery-option-price text-gray-500">
                      FREE Shipping
                    </div>
                  </div>

                </div>
                <div className="delivery-option flex gap-2">
                  <input type="radio" className="delivery-option-input" name={`delivery-option-${productId}`} />
                  
                  <div>
                    <div className="delivery-option-date font-medium">
                      Wednesday, June 15
                    </div>
                    <div className="delivery-option-price text-gray-500">
                      $4.99 - Shipping
                    </div>
                  </div>

                </div>
                <div className="delivery-option flex gap-2">
                  <input type="radio" className="delivery-option-input" name={`delivery-option-${productId}`} />
                  
                  <div>
                    <div className="delivery-option-date font-medium">
                      Monday, June 13
                    </div>
                    <div className="delivery-option-price text-gray-500">
                      $9.99 - Shipping
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
    )
}