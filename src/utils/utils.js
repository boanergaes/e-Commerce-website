export function roundToTwo(num) {
  return Math.round(num * 100) / 100;
}

export function calculatePaymentSummary(products, cart, deliveryOptions) {
    try {
        let totQuantity =  0
        let totCost = 0
        let totShipping = 0
    
        for (let prod of cart) {
            totQuantity += prod.quantity
            const currCost = products.find((item) => item.id === prod.productId).priceCents * prod.quantity
            totCost += currCost
            const currShipping = deliveryOptions.find((item) => item.id === prod.deliveryOptionId).priceCents
            totShipping += currShipping
        }
        return {
            totQuantity: totQuantity, 
            totCost: totCost,
            totShipping: totShipping
        }
    } catch(err) {
        console.error('error while calculating payment:', err)
    }
}