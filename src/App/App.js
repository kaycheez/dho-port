import React from 'react';
import styles from './App.module.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import { Route, Switch } from 'react-router-dom';
import routes from './routes/routes'

const App = () => {
  return (
    <div className={styles.app}>
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
      <Sidebar />
    </div>
  );
}

export default App;
