import Slider from "react-slick";
import house from '../img/house.jpeg';
import '../styles/cards.css'
import React, {useEffect, useState} from "react";

export default function AsSeen (){
    //TODO: replace bed with icon
    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState();
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    useEffect(() => {
        if (width <= 700) {
            return setIsMobile(true)
        }

        setIsMobile(false)
    }, [width])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile? 1 : 3,
        slidesToScroll: 1,
      };

    return (
        <div className='cards'>
            <Slider {...settings}>
                <div className="card">
                    <img src={house} alt='bbc logo' width='100%' className="card-img"/>
                    <div className="card-info">
                        <div className="card-price">£300 p/m</div>
                        <div>2 bed terraced house</div>
                        <div>Hyde Farm, SW12</div>
                    </div>
                </div>
                <div className="card">
                    <img src={house} alt='express logo' width='100%' className="card-img"/>
                    <div className="card-info">
                        <div className="card-price">£300 p/m</div>
                        <div>2 bed terraced house</div>
                        <div>Hyde Farm, SW12</div>
                    </div>
                </div>
                <div className="card">
                    <img src={house} alt='forbes logo' width='100%' className="card-img"/>
                    <div className="card-info">
                        <div className="card-price">£300 p/m</div>
                        <div>2 bed terraced house</div>
                        <div>Hyde Farm, SW12</div>
                    </div>
                </div>
                <div className="card">
                    <img src={house} alt='mirror logo' width='100%' className="card-img"/>
                    <div className="card-info">
                        <div className="card-price">£300 p/m</div>
                        <div>2 bed terraced house</div>
                        <div>Hyde Farm, SW12</div>
                    </div>
                </div>
                <div className="card">
                    <img src={house} alt='telegraph logo' width='100%' className="card-img"/>
                    <div className="card-info">
                        <div className="card-price">£300 p/m</div>
                        <div>2 bed terraced house</div>
                        <div>Hyde Farm, SW12</div>
                    </div>
                </div>
                <div className="card">
                    <img src={house} alt='the sun logo' width='100%' className="card-img"/>
                    <div className="card-info">
                        <div className="card-price">£300 p/m</div>
                        <div>2 bed terraced house</div>
                        <div>Hyde Farm, SW12</div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}