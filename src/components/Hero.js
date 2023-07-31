import '../styles/hero.css'

export default function Hero() {
    // TODO: add links to anchor section ourusers
    //TODO: add where you want to live placeholder?

    return(
        <div className='hero'>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Renting revolution</h1>
                    <p>Open rent is the zero-fuss, no-fees, easy way of renting and advertising for landlord and tenants</p>
                    <div className="hero-input">
                        <input placeholder='Where do you want to live?'/>
                        <button className='primary'>Search</button>
                    </div>
                    <div className='hero-links'>
                        <a href='https://www.openrent.co.uk/landlords-advertise-property-for-rent-on-rightmove-and-zoopla'>landlords</a>
                        <span>|</span>
                        <a href='https://www.openrent.co.uk/find-property-to-rent-from-private-landlords'>tenants</a>
                    </div>
                </div>
            </div>
        </div>
    )
}