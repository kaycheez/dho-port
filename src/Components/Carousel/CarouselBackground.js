import React from 'react';
import './CarouselBackground.scss';
import { carouselMap } from './CarouselData';
import { Carousel } from 'react-responsive-carousel';

export function CarouselBackground () {
    return (
        <div className='carousel'>
            <Carousel showArrows={false}>
                {carouselMap}
            </Carousel>
        </div>
    )
}