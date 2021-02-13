import React, {useState} from 'react'
import Products from './Products';
import {BrowserRouter , Route , Switch} from "react-router-dom"

function Home(props) {

    let cat_id=props.catid
    
  return (
    
      <div className="App">
        <Products cat_id={cat_id}/>
    </div>
  );
}

export default Home;
