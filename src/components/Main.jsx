import comics from "../data/comics"
import Product from "./productCard"


function Main() {

    return (
        <main>

            <button className="btn-current">CURRENT SERIES</button>

            <div className="container-card">
                <Product product={comics} />
            </div>
            <div className="container-btn">
                < button className="btn-card" > LOAD MORE </button >
            </div>


        </main>
    )
}

export default Main