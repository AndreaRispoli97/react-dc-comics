
function Product({ product }) {


    console.log(product);
    return (


        product.map((card) => (


            < div className="prod-card" key={card.id}>

                <div>

                    <img src={card.thumb} alt={card.title}></img>

                </div>
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