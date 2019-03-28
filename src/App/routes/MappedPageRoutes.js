import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CarouselBackground from "../Components/Carousel/CarouselBackground";
import Gallery from "../Components/Gallery/Gallery";


const mappedPageRoutes = (props) => {

  return (
    <Switch>
        <Route
          exact
          path={`/`}
          render={() => <CarouselBackground sidebar={props.sidebar}/>}
        />
        <Route
          path={`/corporate`}
          render={(properties) => <Gallery mappedImages={properties} title={"Corporate"} />}
        />
        <Route
          path={`/fashion`}
          render={(properties) => <Gallery mappedImages={properties} title={"Fashion"} />}
        />
        <Route
          path={`/events`}
          render={(properties) => <Gallery mappedImages={properties} title={"Event"} />}
        />
        <Route
          path={`/food`}
          render={(properties) => <Gallery mappedImages={properties} title={"Food"} />}
        />
        <Route
          path={`/products`}
          render={(properties) => <Gallery mappedImages={properties} title={"Editorial"} />}
        />
    </Switch>
  )
}

export default mappedPageRoutes;