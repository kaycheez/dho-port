import React from 'react';
import './CarouselBackground.scss';
import { carouselMap } from './CarouselData';
import { Carousel } from 'react-responsive-carousel';
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'

export function CarouselBackground () {
    return (
        <div className='carousel--container'>
            <Carousel 
                showArrows={true} 
                showStatus={false} 
                showThumbs={false} 
                showIndicators={false}
                infiniteLoop={true} 
                autoPlay={true} 
                interval={4000} 
                stopOnHover={false}>
                    {carouselMap}
            </Carousel>
        </div>
    )
}