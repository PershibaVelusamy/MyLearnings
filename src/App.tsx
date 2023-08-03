import React from 'react';
import {MainWraper} from './components/pages/index'
import{Basichtml} from './components/pages/basichtmlcss/basichtml'
import './App.css';
import { Practice } from './components/practice/practice';
import { Forcss } from './components/forcss/Forcss';
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Routes>
<Route path={'/'} element={  <Practice/>} />
<Route path={'/css'} element={<Forcss/>}/>
<Route path={'/resume'} element={  <Basichtml/>} />


        </Routes>
    <div className='Mainwrapper'>
  {/* <MainWraper/> */}

  {/* <Practice/> */}

 </div>
    </BrowserRouter>
 
  );
}

export default App;


