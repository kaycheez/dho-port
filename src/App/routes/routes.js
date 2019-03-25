import { CarouselBackground } from "../Components/Carousel/CarouselBackground";

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
        component: null,
        exact: false,
        title: 'Corporate'
    },
    {
        prefix: '',
        path: '/events',
        component: null,
        exact: false,
        title: 'Events'
    },
    {
        prefix: '',
        path: '/fashion',
        component: null,
        exact: false,
        title: 'Fashion'
    },
    {
        prefix: '',
        path: '/products',
        component: null,
        exact: false,
        title: 'Products'
    },
]

export default routes;