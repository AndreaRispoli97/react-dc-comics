import comics from "../data/comics"
import Product from "./productCard"


function Main(props) {

    return (
        <main>
            <Product product={comics} />
        </main>
    )
}

export default Main