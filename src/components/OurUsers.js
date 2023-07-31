import '../styles/ourusers.css'

export default function OurUsers() {
    return (
        <div className="our-users">
            <div className="our-users-card tenants">
                <h4>Tenants</h4>
                <p>On OpenRent there are never any admin fees. Ever. We take down listings as soon as they are let, so no more ghost adverts.
                And we'll protect your deposit and rent money.</p>
                <button className='primary'>Start your search</button>
                <button className='secondary--alternative'>Learn more</button>
            </div>
            <div className="our-users-card landlord">
                <h4>Landlords</h4>
                <p>We find you tenants and help with referencing, contracts and more if you need it.
                OpenRent gives you the best possible chance of finding your ideal tenant, and you stay in control.</p>
                <button className='primary'>List your property</button>
                <button className='secondary'>Learn more</button>
            </div>
        </div>
    )
}