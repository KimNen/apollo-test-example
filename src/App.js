
import React, { Component, Fragment } from 'react';
import { Query } from "react-apollo";
import RoutePage from './Router'
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <RoutePage/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
