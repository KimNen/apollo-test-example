import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Home from './pages/home/Home';
import review from './pages/review/Review'

class Router extends React.Component{

  constructor(props){
    super(props)

  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/review" component={review} />
      </Switch>
    );
  }
}

export default Router;
