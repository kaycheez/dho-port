import React from 'react';
import './CarouselBackground.scss';
import { carouselMap } from './CarouselData';
import { Carousel } from 'react-responsive-carousel';
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'

export function CarouselBackground () {
    return (
        <div className='carousel--container'>
            <div className='carousel--cover'/>
                <Carousel 
                    showArrows={true} 
                    showStatus={false} 
                    showThumbs={false} 
                    showIndicators={false}
                    infiniteLoop={true} 
                    autoPlay={false} 
                    interval={4000} >
                        {carouselMap}
                </Carousel>
        </div>
    )
}