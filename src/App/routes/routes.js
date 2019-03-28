import CarouselBackground from "../Components/Carousel/CarouselBackground";
import Gallery from "../Components/Gallery/Gallery";
import corporate from "../assets/images/corporate.jpg";
import events from "../assets/images/event.jpg";
import fashion from "../assets/images/fashion.jpg";
import products from "../assets/images/product.jpg";

const routes = [
    {
        prefix: '',
        path: '/',
        component: CarouselBackground,
        exact: true,
        title: 'Home',
        image: corporate
    },
    {
        prefix: '',
        path: '/corporate',
        component: Gallery,
        exact: false,
        title: 'Corporate',
        image: corporate
    },
    {
        prefix: '',
        path: '/events',
        component: Gallery,
        exact: false,
        title: 'Events',
        image: events
    },
    {
        prefix: '',
        path: '/fashion',
        component: Gallery,
        exact: false,
        title: 'Fashion',
        image: fashion
    },
    {
        prefix: '',
        path: '/products',
        component: Gallery,
        exact: false,
        title: 'Products',
        image: products
    },
]

export default routes;