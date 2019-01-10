import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo'
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import client from './components/client';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}> 
            <App />
        </ApolloProvider>
    </BrowserRouter>
, document.getElementById('root'));
