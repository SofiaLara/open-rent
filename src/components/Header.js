import logo from '../img/logo.svg'
import search from '../img/search.png'
import '../styles/header.css'
import { useEffect, useState } from 'react'

export default function Header() {
    //navbar scroll when active state
    const [navbar, setNavbar] = useState(false)

    //TODO: add Sign in cta in orange and real links
    //TODO: add search to header

    //navbar scroll changeBackground function
    const changeBackground = () => {
        if (window.scrollY >= 66) {
        setNavbar(true)
        } else {
        setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })

    return(
        <header className={navbar ? "header active" : "header"}>
            <img src={logo} className="logo" alt='open rent logo' width={150}/>

            <input className="side-menu" type="checkbox" id="side-menu"/>
            <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>

            <nav className="nav">
                <ul className="menu">
                    <li><img src={search} alt='search icon'/></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a> </li>
                    <li><button className='primary'>Sign In</button></li>
                </ul>
            </nav>
        </header>
    )
}