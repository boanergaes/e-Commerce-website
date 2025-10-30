import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../App"
import { DeliveryOptionsContext } from "../App"
import { roundToTwo } from "../utils/utils"

export default function CartCard({productId, quantity, deliveryOptionId}) {
    const products = useContext(ProductContext)
    const deliveryOptions = useContext(DeliveryOptionsContext)

    const product = products.find(prod => prod.id == productId)

    return (
        <div className="cart-item-container flex flex-col gap-3 border border-gray-300 p-4 rounded-lg">
            <div className="delivery-date text-green-700 text-xl font-bold">
              Delivery date: Tuesday, June 21
            </div>

            <div className="cart-item-details-grid grid grid-cols-[100px_1fr] sm:grid-cols-[100px_1fr_1fr] gap-8">
              <img className="product-image" src={`/${product.image}`} />

              <div className="cart-item-details">
                <div className="product-name font-bold">
                  {product.name}
                </div>
                <div className="product-price font-bold">
                  ${roundToTwo(product.priceCents/100) }
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

              <div className="col-span-full sm:col-span-1">
                <div className="delivery-options-title font-bold">
                  Choose a delivery option:
                </div>

                {deliveryOptions.map((item) => {
                  return (
                    <div key={item.id} className="delivery-option flex gap-2">
                      <input defaultChecked={item.id === deliveryOptionId} type="radio" name={`delivery-option-${productId}`} id={`delivery-option-${productId}`} className="delivery-option-input" />

                      <div>
                        <div className="delivery-option-date font-medium">
                          {`${item.deliveryDays} ${item.deliveryDays === 1 ? 'day' : 'days'} from now.`}
                        </div>
                        <div className="delivery-option-price text-gray-500">
                          {item.priceCents === 0 ? 'FREE' : item.priceCents / 100 + ' -'} Shipping
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
    )
}