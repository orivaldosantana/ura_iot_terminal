import React from 'react';

import { Connector } from 'mqtt-react-hooks';
import Status from './Status';
import BasicControl from './components/BasicControl';
import RobotStatus from './components/RobotStatus';
import URAHeader from './components/URAHeader'

import './App.css'

export default function App() {
  return (
    <div>
      <URAHeader title="Controle URA MQTT" />
      <Connector brokerUrl="ws://157.230.89.7:1884"  >
        <BasicControl />
        <RobotStatus />
        <Status />
      </Connector>
    </div>
  );
}