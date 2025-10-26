function Option({n}) {
    return <option value={n}>{n}</option>
}

export default function ProductCard({image, prod_name, rating, price_cents, keywords}) {
    return (
        <div className="product-card flex flex-col gap-4 bg-gray-100">
            <img src={`/${image}`} alt={prod_name} className="product-img w-56" />
            <p>{prod_name}</p>
            <div className="detail">
                <div className="rating">
                    <img src={`/images/ratings/rating-${rating.stars * 10}.png`} alt="rating stars" />
                    <span>{rating.count}</span>
                </div>
                <div className="price">{`$${price_cents/100}`}</div>
            </div>
            <select name="count" id="count">
                <Option n='1' />
                <Option n='2' />
                <Option n='3' />
                <Option n='4' />
                <Option n='5' />
                <Option n='6' />
                <Option n='7' />
                <Option n='8' />
                <Option n='9' />
                <Option n='10' />
            </select>
            <button>Add to Cart</button>
        </div>
    )
}