

import React, { Component } from 'react';
import { Query } from "react-apollo";
import * as heroGql from '../../graphql/query/hero';
import Loading from '../loading/Loading'
import Error from '../error/Error'
import { Table } from 'reactstrap';
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
              {<Table dark>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>typename</th>
                  </tr>
                </thead>
                <tbody>
                  {data.hero.friends.map( (CurrentValue) => { 
                    return (
                      <tr>  
                        <td>{CurrentValue.id}</td>
                        <td>{CurrentValue.name}</td>
                        <td>{CurrentValue.__typename}</td>
                      </tr>
                    )
                  })}
                </tbody>
                
              </Table>}
            </div>
          )
        }}

      </Query>
    );
  }
}

export default Home;
