import Slider from "react-slick";
import bbc from '../img/bbc.png'
import express from '../img/express.png'
import forbes from '../img/forbes.png'
import mirror from '../img/mirror.png'
import telegraph from '../img/telegraph.png'
import thesun from '../img/the-sun.png'

export default function AsSeen (){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        arrows: false,
      };

    return (
        <div className='as-seen'>
            <Slider {...settings}>
                <div>
                    <img src={bbc} alt='bbc logo' height='20px' width='auto'/>
                </div>
                <div>
                    <img src={express} alt='express logo' height='20px'width='auto' />
                </div>
                <div>
                    <img src={forbes} alt='forbes logo' height='20px' width='auto'/>
                </div>
                <div>
                    <img src={mirror} alt='mirror logo' height='20px' width='auto'/>
                </div>
                <div>
                    <img src={telegraph} alt='telegraph logo' height='20px' width='auto'/>
                </div>
                <div>
                    <img src={thesun} alt='the sun logo' height='20px' width='auto'/>
                </div>
            </Slider>
        </div>
    )
}