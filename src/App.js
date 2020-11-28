import React, { useState } from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import Search from './components/Search';
import List from './components/List';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  
  const [item, setItem] = useState('');

  const [element, setElement] = useState([]);
  
  return (
    <div className="container d-flex justify-content-center">
      <div className="bg-secondary text-center box-card col-lg-8">
        <h1 className="font-weight-bold">To Do List</h1>
          <Search item={item} setItem={setItem} element={element} setElement={setElement} />
          <List element={element} setElement={setElement} />
      </div>
    </div>
  );
}

export default App;
