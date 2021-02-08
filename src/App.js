import React from 'react';

import { Connector } from 'mqtt-react-hooks';
import Status from './Status';
import BasicControl from './components/BasicControl';
import RobotStatus from './components/RobotStatus';
import logo from './URA_150px.png'; 

import './App.css'

export default function App() {
  return (
    <Connector brokerUrl="ws://157.230.89.7:1884"  >
      <header> 
        
        <h1>Controle URA MQTT</h1>
        <img src={logo} alt="Logo do URA" width="120px" />
      </header>
      
      <BasicControl />
      <RobotStatus />
      <Status />
    </Connector>
  );
}