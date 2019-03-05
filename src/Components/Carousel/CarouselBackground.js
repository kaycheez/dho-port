import React from 'react';
import {carouselData} from './CarouselData';
import './CarouselBackground.scss';
import './CarouselArrow.scss'
import Slider from 'react-slick';

export function CarouselBackground () {

    const NextArrow = (props) => {
        return (
            <div {...props} className='carousel__arrow carousel__arrow--next'>
                <a className='animated-arrow' href='https://google.com'>
                    <span className='the-arrow -left'>
                        <span className='shaft'/>
                    </span>
                    <span className='main'>
                        <span className='text'>
                            {/* Next */}
                        </span>
                        <span className='the-arrow -right'>
                            <span className='shaft'/>
                        </span>
                    </span>
                </a>
            </div>  
        )
    }

    const PrevArrow = (props) => {
        return (
            <div {...props} className='carousel__arrow carousel__arrow--prev'>
                <a className='animated-arrow' href='https://google.com'>
                    <span className='the-arrow -left'>
                        <span className='shaft'/>
                    </span>
                    <span className='main'>
                        <span className='text'>
                            {/* Previous */}
                        </span>
                        <span className='the-arrow -right'>
                            <span className='shaft'/>
                        </span>
                    </span>
                </a>
            </div>
        )
    }

    const settings = {      
        // fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4700,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    return (
        <div className='carousel__container'>
            <Slider {...settings}>
                {carouselData}
            </Slider>
        </div>
    )
}