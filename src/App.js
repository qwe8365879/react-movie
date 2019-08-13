import React from "react";
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { Layout } from "./Components/Layout";
import { Home } from "./Components/Pages/Home";

import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/home/:page" component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
