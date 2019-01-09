import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory'

const cache = new InMemoryCache();

const client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache
});

export default client