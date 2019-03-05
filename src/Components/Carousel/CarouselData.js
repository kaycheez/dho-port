import React from 'react';
import { Link } from 'react-router-dom';

import corporate from '../../assets/images/corporate.jpg';
import events from '../../assets/images/event.jpg';
import fashion from '../../assets/images/fashion.jpg';
import products from '../../assets/images/product.jpg';

const carouselImages = [
    {
        image: corporate,
        name: 'Corporate',
        path: '/corporate'
    }, 
    {
        image: events,
        name: 'Events',
        path: '/events'
    }, 
    {
        image: fashion,
        name: 'Fashion',
        path: '/fashion'
    }, 
    {
        image: products,
        name: 'Products',
        path: '/products'
    }
]


export const carouselData = carouselImages.map(({image, name, path}, i) => {
    return (
        <div className='carousel__image' key={i}>
            <img className='carousel__image-item' alt={name} src={image}/>
            <Link to={path}>
                <h1 className='carousel__image-caption'>{name}</h1>
            </Link>
        </div>
    )
})