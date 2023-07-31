import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Hero from "../components/Hero.js"
import About from "../components/About.js"
import OurUsers from "../components/OurUsers.js"
import AsSeen from "../components/AsSeen.js"
import Cards from "../components/Cards.js"
import reviews from '../img/reviews.png'

export default function Home() {

    return(
        <>
            <Header />
            <main>
                <Hero />
                <About/>
                <OurUsers/>
                <img src={reviews} alt="google reviews" width="100%"/>
                <Cards/>
                <AsSeen/>
            </main>
            <Footer />
        </>
    )
}