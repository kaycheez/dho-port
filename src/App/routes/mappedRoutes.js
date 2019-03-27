
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes'

function mappedRoutes() {
  return (
    <Switch>
      {
        routes.map(e =>
          <Route
            exact={e.exact}
            path={`${e.prefix}${e.path}`}
            component={e.component}
            key={e.path} // Keys are required when mapping
          />)
      }
    </Switch>
  )
}

export default mappedRoutes;