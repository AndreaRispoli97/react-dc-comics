import logoDc from '../assets/dc-logo-bg.png'


function Footer() {
    return (
        <footer>
            <div className="container-icone">
                <nav>
                    <ul>
                        <li><img src="/img/buy-comics-digital-comics.png" alt="" /><span>DIGITAL COMICS</span></li>
                        <li><img src="/img/buy-comics-merchandise.png" alt="" /><span>DC MERCHANDISE</span></li>
                        <li><img src="/img/buy-comics-subscriptions.png" alt="" /><span>SUBSCRIPTION</span></li>
                        <li><img src="/img/buy-comics-shop-locator.png" alt="" /><span>COMIC SHOP LOCATOR</span></li>
                        <li><img src="/img/buy-dc-power-visa.svg" alt="" /><span>DC POWER VISA</span></li>
                    </ul>
                </nav>
            </div>
            <div className="container-liste">
                <img src={logoDc} alt="Dclogo" className='position-dc' />
                <nav>
                    <ul>
                        <h3>DC COMICS</h3>
                        <li>Characters</li>
                        <li>Comic</li>
                        <li>Movies</li>
                        <li>TV</li>
                        <li>Games</li>
                        <li>Videos</li>
                        <li>News</li>
                        <h3>SHOP</h3>
                        <li>Shop DC</li>
                        <li>Shop DC Collectibles</li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <h3>DC</h3>
                        <li>Terms Of Use</li>
                        <li>Privacy policy(New)</li>
                        <li>Ad Choises</li>
                        <li>Adverstising</li>
                        <li>Jobs</li>
                        <li>Subscriptions</li>
                        <li>Talent Workshops</li>
                        <li>CPSC Certificates</li>
                        <li>Ratings</li>
                        <li>Shop Help</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <h3>SITES</h3>
                        <li>DC</li>
                        <li>MAD Magazine</li>
                        <li>DC Kids</li>
                        <li>DC Universe</li>
                        <li>DC Power Visa</li>
                    </ul>
                </nav>
            </div>
            <div>barra social</div>
        </footer>
    )
}

export default Footer