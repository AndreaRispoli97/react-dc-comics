import logoDc from '../assets/dc-logo-bg.png'


function Footer(props) {
    const dcOne = props.footerOne;
    const dcTwo = props.footerTwo;
    const dcThree = props.footerThree;
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
                        <h3>{dcOne[0]}</h3>
                        <li><a href="#">{dcOne[1]}</a></li>
                        <li><a href="#">{dcOne[2]}</a></li>
                        <li><a href="#">{dcOne[3]}</a></li>
                        <li><a href="#">{dcOne[4]}</a></li>
                        <li><a href="#">{dcOne[5]}</a></li>
                        <li><a href="#">{dcOne[6]}</a></li>
                        <li><a href="#">{dcOne[7]}</a></li>
                        <h3>{dcOne[8]}</h3>
                        <li><a href="#">{dcOne[9]}</a></li>
                        <li><a href="#">{dcOne[10]}</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <h3>{dcTwo[0]}</h3>
                        <li><a href="#">{dcTwo[1]}</a></li>
                        <li><a href="#">{dcTwo[2]}</a></li>
                        <li><a href="#">{dcTwo[3]}</a></li>
                        <li><a href="#">{dcTwo[4]}</a></li>
                        <li><a href="#">{dcTwo[5]}</a></li>
                        <li><a href="#">{dcTwo[6]}</a></li>
                        <li><a href="#">{dcTwo[7]}</a></li>
                        <li><a href="#">{dcTwo[8]}</a></li>
                        <li><a href="#">{dcTwo[9]}</a></li>
                        <li><a href="#">{dcTwo[10]}</a></li>
                        <li><a href="#">{dcTwo[11]}</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <h3>{dcThree[0]}</h3>
                        <li><a href="#">{dcThree[1]}</a></li>
                        <li><a href="#">{dcThree[2]}</a></li>
                        <li><a href="#">{dcThree[3]}</a></li>
                        <li><a href="#">{dcThree[4]}</a></li>
                        <li><a href="#">{dcThree[5]}</a></li>
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