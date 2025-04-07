import Header from "./components/Header.jsx"
import Main from "./components/Main"
import Footer from "./components/Footer.jsx"
import Jumbotron from "./components/Jumbotron.jsx"
// import Logo from "./components/Logo"

const menuHeader = ["CHARACTER", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"]
const menuFooterOne = ["DC COMICS", "Characters", "Comic", "Movies", "TV", "Games", "Videos", "News", "SHOP", "Shop DC", "Shop DC Collectibles"]
const menuFooterTwo = ["DC", "Terms Of Use", "Privacy policy(New)", "Ad Choises", "Adverstising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"]
const menuFooterThree = ["SITES", "DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"]
function App() {


  return (
    <>
      <Header menuHeader={menuHeader} />
      <Jumbotron />
      <Main />
      <Footer footerOne={menuFooterOne} footerTwo={menuFooterTwo} footerThree={menuFooterThree} />

    </>
  )
}

export default App
