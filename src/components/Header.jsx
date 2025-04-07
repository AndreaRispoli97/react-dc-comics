import Logo from "./Logo.jsx"

function Header(props) {
    const headerDc = props.menuHeader;
    return (
        <>
            <header>
                <figure><Logo /></figure>
                <nav>
                    <ul>
                        <li><a href="https://www.dc.com/characters">{headerDc[0]}</a></li>
                        <li><a href="https://www.dc.com/comics">{headerDc[1]}</a></li>
                        <li><a href="https://www.dc.com/movies">{headerDc[2]}</a></li>
                        <li><a href="https://www.dc.com/games">{headerDc[3]}</a></li>
                        <li><a href="https://www.dc.com/news">{headerDc[4]}</a></li>
                        <li><a href="https://www.dc.com/videos">{headerDc[5]}</a></li>
                        <li><a href="https://shop.dc.com/?_gl=1*1fr1gp7*_gcl_au*MTczMTY0NzY4Mi4xNzQzNzgwMDQ3">{headerDc[6]}</a></li>
                        <li><a href="https://discord.com/servers/dc-official-1253043746090520626">{headerDc[7]}</a></li>
                        <li><a href="#">{headerDc[8]}</a></li>
                        <li><a href="#">{headerDc[9]}</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header