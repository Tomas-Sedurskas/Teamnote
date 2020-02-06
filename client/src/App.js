import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Companies from './components/Companies';
import Navbar_Side from "./components/Common/Navbar_Side";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <div className="App">
      <Navbar_Side / >
      <ApolloProvider client={client}>
        
  
      </ApolloProvider>
    </div>
  );
}

export default App;
