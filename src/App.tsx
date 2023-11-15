import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Trash from "./components/Trash";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create editing={false}/>}></Route>
        <Route path='/edit/:id' element={<Create editing={true}/>}></Route>
        <Route path='/trash' element={<Trash />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
