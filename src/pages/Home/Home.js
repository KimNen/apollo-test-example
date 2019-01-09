import React, { Component } from 'react';
import { Query } from "react-apollo";
import * as heroGql from '../../graphql/query/hero';
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import client from '../../components/client';
import './Home.css'

class Home extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){}

  render() {
    return (
      <Query
        query={heroGql.getHero()}
      >
        {({ loading, error, data }) => {
          if(loading) return <Loading/>
          if(error) return <Error/>
          console.log(data)
          return (
            <div>

            </div>
          )

        }}

      </Query>
    );
  }
}

export default Home;
