import React from 'react';
import {carouselData} from './CarouselData';
import './CarouselBackground.scss';
import Slider from 'react-slick';

export function CarouselBackground () {

    const NextArrow = (props) => {
        return (
            <div {...props} className='carousel__arrow carousel__next'>
                Next
            </div>
        )
    }

    const PrevArrow = (props) => {
        return (
            <div {...props} className='carousel__arrow carousel__prev'>
                Previous
            </div>
        )
    }

    const settings = {      
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: false,
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