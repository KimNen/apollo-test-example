import React, { Component, Fragment } from 'react';
import { Query } from "react-apollo";
import RoutePage from './Router'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    console.log('app : ', this.props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <Fragment>
        <RoutePage/>
      </Fragment>
    );
  }
}

export default App;
