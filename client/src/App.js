import React from 'react';
import { Box } from '@material-ui/core';

//components
import Header from './components/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Header />
       <Box style={{marginTop: 64}}>
      <Home />
      </Box>
    </>
  );
}

export default App;
