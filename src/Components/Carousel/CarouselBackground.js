import React from 'react';
import {carouselData} from './CarouselData';
import './CarouselBackground.scss';
import './CarouselArrow.scss'
import Slider from 'react-slick';

export function CarouselBackground () {

    const NextArrow = (props) => {
        return (
            <div {...props} className='carousel__arrow carousel__arrow--next'>
                <a class='animated-arrow' href='https://google.com'>
                    <span class='the-arrow -left'>
                        <span class='shaft'/>
                    </span>
                    <span class='main'>
                        <span class='text'>
                            Next
                        </span>
                        <span class='the-arrow -right'>
                            <span class='shaft'/>
                        </span>
                    </span>
                </a>
            </div>  
        )
    }

    const PrevArrow = (props) => {
        return (
            <div {...props} className='carousel__arrow carousel__arrow--prev'>
                <a class='animated-arrow' href='https://google.com'>
                    <span class='the-arrow -left'>
                        <span class='shaft'/>
                    </span>
                    <span class='main'>
                        <span class='text'>
                            Previous
                        </span>
                        <span class='the-arrow -right'>
                            <span class='shaft'/>
                        </span>
                    </span>
                </a>
            </div>
        )
    }

    const settings = {      
        fade: true,
        infinite: true,
        speed: 500,
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