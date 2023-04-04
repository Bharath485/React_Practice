import React from 'react'
import Class from './components/Class'
import HandleE from './components/HandleE'
import Input from './components/Input';
import Conditional from './components/Conditional';
import List from './components/List';

import './App.css'


function Bharath(){
  return (
    <div className='App'>
      <Class/>
      <HandleE/>
      <Input/>
      <Conditional name ={['Hi','hello','How','Baby']}/>
      <List/>
    </div>
  )
}

export default Bharath


