import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CarouselBackground from "../Components/Carousel/CarouselBackground";
import Gallery from "../Components/Gallery/Gallery";

const mappedPageRoutes = (props) => {

  let currentPage = window.location.href;
  let path = currentPage.substring(22, currentPage.length);
  let title = path.substring(0, 1).toUpperCase() + path.substring(1, path.length);

  return (

    <Switch>
        <Route
          exact
          path={`/`}
          render={() => <CarouselBackground sidebar={props.sidebar}/>}
        />
        <Route
          path={`/${path}`}
          render={(properties) => <Gallery {...properties} title={title} />}
        />
    </Switch>
  )
}

export default mappedPageRoutes;