import { CarouselBackground } from "../Components/Carousel/CarouselBackground";

const pageRoutes = [
    {
        prefix: '',
        path: '/',
        component: CarouselBackground,
        exact: true,
        title: 'Home'
    },
    {
        prefix: '',
        path: '/photo',
        component: null,
        exact: false,
        title: 'Photo'
    }
]

export default pageRoutes;