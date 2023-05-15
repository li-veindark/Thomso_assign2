import React from 'react';
import ReactDOM from "react-dom/client";
import './App.css';
import Create from './components/create';
import Read from './components/read';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Delete from './components/delete';
import Update from './components/update';



function App() {
  return (
    <Router>

      <div>
        <h1>EMPLOYEE SOFTWARE MANAGEMANT</h1>
        
        <Routes>
          <Route exact path='/create' Component={Create}></Route>
          <Route exaxt path='/' Component={Read}></Route>
          <Route path='/update' Component={Update}></Route>
          <Route path='/delete' Component={Delete}></Route>
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
