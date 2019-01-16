import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Home from './pages/home/Home';
import review from './pages/review/Review'
import reviewEdit from './pages/review/ReviewEdit'

class Router extends React.Component{

  constructor(props){
    super(props)

  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/review" component={review} />
        <Route path='/review/edit' component={reviewEdit} />
      </Switch>
    );
  }
}

export default Router;
