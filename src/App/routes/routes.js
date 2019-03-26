import { CarouselBackground } from "../Components/Carousel/CarouselBackground";
import { Gallery } from "../Components/Gallery/Gallery";

const routes = [
    {
        prefix: '',
        path: '/',
        component: CarouselBackground,
        exact: true,
        title: 'Home'
    },
    {
        prefix: '',
        path: '/corporate',
        component: Gallery,
        exact: false,
        title: 'Corporate'
    },
    {
        prefix: '',
        path: '/events',
        component: Gallery,
        exact: false,
        title: 'Events'
    },
    {
        prefix: '',
        path: '/fashion',
        component: Gallery,
        exact: false,
        title: 'Fashion'
    },
    {
        prefix: '',
        path: '/products',
        component: Gallery,
        exact: false,
        title: 'Products'
    },
]

export default routes;