import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Detail from '../../pages/Detail';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';

function AppRoutes(props) {
  return (
    <section className= 'appRoutes'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/detail/:id' component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
}

export default AppRoutes;
