import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { apiEndpoint } from "./prismic-configuration";
import { Help, Preview, NotFound } from "./pages";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

/**
 * Main application componenet
 */
const App = (props) => {
  const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint);
  const repoName = repoNameArray[1];

  return (
    <Fragment>
      <Header></Header>
      <Helmet>
        <script
          async
          defer
          src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`}
        />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/preview" component={Preview} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </Fragment>
  );
};

export default App;
