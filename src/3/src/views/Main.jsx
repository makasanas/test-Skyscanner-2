import React from 'react';
import { Switch } from 'react-router-dom';
import routes from '../routes/index';
import NavBar from '../components/NavBar/index';
import Footer from '../components/Footer';

const Main = () => (
  <main className="main">
    <NavBar />
    <Switch>
      {
          routes.map((route, index) => (
            <route.type
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.component}
              location={route.location}
            />
          ))
        }
    </Switch>
    <Footer />
  </main>
);

export default Main;
