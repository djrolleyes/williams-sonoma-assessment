import WithLightbox from './Lightbox'
import WithSpinner from './WithSpinner'
import Products from './Products'
import './App.scss'

const ProductsWithLightbox = WithLightbox(Products);
const ProductsWithSpinner = WithSpinner(ProductsWithLightbox);

export default function App() {
  return (
    <div className="container">
      <ProductsWithSpinner />
    </div>
  )
}


/*
import React, { useContext, useEffect } from 'react'
import {Context} from '../Store'
import axios from 'axios'

export default function Component() {

  const [ state, dispatch ] = useContext(Context)

  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        dispatch({
          type: 'ADD_POSTS',
          payload: res.data
        })
      })
  }, [])

  return (
    <div>
      { state.posts.map(item => <p>{item.title}</p>) }
    </div>
  )
}

*/
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
