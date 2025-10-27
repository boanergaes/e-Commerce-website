function Option({n}) {
    return <option value={n}>{n}</option>
}

export default function ProductCard({image, prod_name, rating, price_cents, keywords}) {
    return (
        <div className="product-card flex flex-col gap-4 bg-gray-100 rounded-2xl overflow-hidden px-4 py-5 w-70 border border-gray-200 shadow-sm hover:shadow-md">
            <img src={`/${image}`} alt={prod_name} className="product-img w-56 m-auto rounded-2xl hover:scale-[1.02] transition" />
            <p>{prod_name}</p>
            <div className="detail flex justify-between items-center">
                <div className="rating flex items-center gap-2">
                    <img className="w-30" src={`/images/ratings/rating-${rating.stars * 10}.png`} alt="rating stars" />
                    <span className="text-[1.22rem] text-gray-600">{rating.count}</span>
                </div>
                <div className="price font-bold">{`$${price_cents/100}`}</div>
            </div>
            <select className="bg-white p-1 rounded-lg w-fit" name="count" id="count">
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
            <button className="bg-green-700 py-2 rounded-lg text-white cursor-pointer hover:bg-green-800 transition active:scale-[0.98]">Add to Cart</button>
        </div>
    )
}