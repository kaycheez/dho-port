import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CarouselBackground from "../Components/Carousel/CarouselBackground";
import { Gallery } from "../Components/Gallery/Gallery";


const mappedPageRoutes = (props) => {

  // console.log(props.sidebar);

  return (
    <Switch>
        <Route
          exact
          path={`/`}
          render={() => <CarouselBackground sidebar={props.sidebar}/>}
        />
        <Route
          path={`/corporate`}
          component={Gallery}
        />
        <Route
          path={`/fashion`}
          component={Gallery}
        />
        <Route
          path={`/event`}
          component={Gallery}
        />
        <Route
          path={`/food`}
          component={Gallery}
        />
        <Route
          path={`/editorial`}
          component={Gallery}
        />
    </Switch>
  )
}

export default mappedPageRoutes;