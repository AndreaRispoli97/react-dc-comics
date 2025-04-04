import Logo from "./Logo.jsx"

function Header(props) {
    const headerDc = props.menuHeader;
    return (
        <>
            <header>
                <figure><Logo /></figure>
                <nav>
                    <ul>
                        <li><a href="#">{headerDc[0]}</a></li>
                        <li><a href="#">{headerDc[1]}</a></li>
                        <li><a href="#">{headerDc[2]}</a></li>
                        <li><a href="#">{headerDc[3]}</a></li>
                        <li><a href="#">{headerDc[4]}</a></li>
                        <li><a href="#">{headerDc[5]}</a></li>
                        <li><a href="#">{headerDc[6]}</a></li>
                        <li><a href="#">{headerDc[7]}</a></li>
                        <li><a href="#">{headerDc[8]}</a></li>
                        <li><a href="#">{headerDc[9]}</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header