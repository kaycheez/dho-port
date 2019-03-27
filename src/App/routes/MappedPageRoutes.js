import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CarouselBackground from "../Components/Carousel/CarouselBackground";


const mappedPageRoutes = (props) => {
  return (
    <Switch>
        <Route
          exact
          path={`/`}
          render={props => <CarouselBackground {...props.match.params} />}
        />
        <Route
          path={`/photo`}
          component='null'
        />
    </Switch>
  )
}

export default mappedPageRoutes;