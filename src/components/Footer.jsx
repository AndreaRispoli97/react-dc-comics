import logoDc from '../assets/dc-logo-bg.png'


function Footer() {
    return (
        <footer>
            <div className="container-icone">
                <nav>
                    <ul>
                        <li><a href="#"><img src="/img/buy-comics-digital-comics.png" alt="" /></a><span>DIGITAL COMICS</span></li>
                        <li><a href="#"><img src="/img/buy-comics-merchandise.png" alt="" /></a><span>DC MERCHANDISE</span></li>
                        <li><a href="#"><img src="/img/buy-comics-subscriptions.png" alt="" /></a><span>SUBSCRIPTION</span></li>
                        <li><a href="#"><img src="/img/buy-comics-shop-locator.png" alt="" /></a><span>COMIC SHOP LOCATOR</span></li>
                        <li><a href="#"><img src="/img/buy-dc-power-visa.svg" alt="" /></a><span>DC POWER VISA</span></li>
                    </ul>
                </nav>
            </div>
            <div className="container-liste">
                <img src={logoDc} alt="Dclogo" className='position-dc' />
                <nav>
                    <ul>
                        <h3>DC COMICS</h3>
                        <li><a href="#">Characters</a></li>
                        <li><a href="#">Comic</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">News</a></li>
                        <h3>SHOP</h3>
                        <li><a href="#">Shop DC</a></li>
                        <li><a href="#">Shop DC Collectibles</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <h3>DC</h3>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Privacy policy(New)</a></li>
                        <li><a href="#">Ad Choises</a></li>
                        <li><a href="#">Adverstising</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Subscriptions</a></li>
                        <li><a href="#">Talent Workshops</a></li>
                        <li><a href="#">CPSC Certificates</a></li>
                        <li><a href="#">Ratings</a></li>
                        <li><a href="#">Shop Help</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <h3>SITES</h3>
                        <li><a href="#">DC</a></li>
                        <li><a href="#">MAD Magazine</a></li>
                        <li><a href="#">DC Kids</a></li>
                        <li><a href="#">DC Universe</a></li>
                        <li><a href="#">DC Power Visa</a></li>
                    </ul>
                </nav>
            </div>
            <div className='container-social'>
                <nav>
                    <button className='btn'><a href="#">SIGN-UP NOW!</a></button>
                </nav>
                <nav>
                    <ul>
                        <h2>FOLLOW US</h2>
                        <il><a href="#"><img src="/img/footer-facebook.png" alt="" /></a></il>
                        <il><a href="#"><img src="/img/footer-twitter.png" alt="" /></a></il>
                        <il><a href="#"><img src="/img/footer-youtube.png" alt="" /></a></il>
                        <il><a href="#"><img src="/img/footer-pinterest.png" alt="" /></a></il>
                        <il><a href="#"><img src="/img/footer-periscope.png" alt="" /></a></il>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer