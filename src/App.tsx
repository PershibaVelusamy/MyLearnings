import React from 'react';
import {MainWraper} from './components/pages/index'
import{Basichtml} from './components/pages/basichtmlcss/basichtml'
import './App.css';
import { Practice } from './components/practice/practice';

function App() {
  return (
 <div className='Mainwrapper'>
  {/* <MainWraper/> */}
  <Basichtml/>
  <Practice/>

 </div>
  );
}

export default App;


