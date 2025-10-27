export default function PaymentSummary() {
    return (
        <div class="payment-summary flex flex-col gap-1.5 border border-gray-300 rounded-lg p-4 h-fit">
            <div class="payment-summary-title font-bold text-[1.2rem] mb-1.5">
              Payment Summary
            </div>

            <div class="payment-summary-row flex justify-between">
              <div>Items (3):</div>
              <div class="payment-summary-money">$42.75</div>
            </div>

            <div class="payment-summary-row flex justify-between">
              <div>Shipping &amp; handling:</div>
              <div class="payment-summary-money border-b border-b-gray-300 pb-2">$4.99</div>
            </div>

            <div class="payment-summary-row subtotal-row flex justify-between">
              <div>Total before tax:</div>
              <div class="payment-summary-money">$47.74</div>
            </div>

            <div class="payment-summary-row flex justify-between border-b border-b-gray-300 pb-2">
              <div>Estimated tax (10%):</div>
              <div class="payment-summary-money">$4.77</div>
            </div>

            <div class="payment-summary-row total-row flex justify-between text-green-700 font-bold text-[1.2rem] py-2">
              <div>Order total:</div>
              <div class="payment-summary-money">$52.51</div>
            </div>

            <button class="place-order-button button-primary bg-green-700 rounded-md p-1.5 text-white hover:bg-[#198754bf] active:bg-[#19875480] transition cursor-pointer">
              Place your order
            </button>
        </div>
    )
}