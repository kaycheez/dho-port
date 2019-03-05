import React from 'react';

import corporate from '../../assets/images/corporate.jpg';
import events from '../../assets/images/event.jpg';
import fashion from '../../assets/images/fashion.jpg';
import products from '../../assets/images/product.jpg';

const carouselImages = [
    {
        image: corporate,
        name: 'Corporate'
    }, 
    {
        image: events,
        name: 'Events'
    }, 
    {
        image: fashion,
        name: 'Fashion'
    }, 
    {
        image: products,
        name: 'Products'
    }
]


export const carouselData = carouselImages.map(({image, name}, i) => {
    return (
        <div className='carousel__image' key={i}>
            <img className='carousel__image-item' alt={name} src={image}/>
        </div>
    )
})