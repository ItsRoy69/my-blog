import React from 'react';
import { Box } from '@material-ui/core';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


//components
import Header from './components/Header';
import Home from './components/Home/Home';
import DetailView from './components/Post/DetailView';
import CreateView from './components/Post/CreateView';

function App() {
  return (
    <BrowserRouter>

      <Header />
       <Box style={{marginTop: 64}}>
         <Routes>
           <Route exact path='/' element={<Home/>} />
           <Route exact path='/details' element={<DetailView/>} />
           <Route exact path='/create' element={<CreateView/>} />
        </Routes>
      </Box>

    </BrowserRouter>
  );
}

export default App;
