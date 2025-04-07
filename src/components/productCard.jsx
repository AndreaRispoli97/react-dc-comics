
function Product({ product }) {


    console.log(product);
    return (

        product.map((card) => (
            < div className="prod-card" key={card.id}>
                <img src={card.thumb} alt={card.title} className="card-img"></img>
                <div>
                    <h4>
                        {card.series}
                    </h4>
                </div>
            </div >
        )
        )
    )
};

export default Product