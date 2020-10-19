import React from 'react';

import { Connector } from 'mqtt-react-hooks';
import Status from './Status';
import BasicControl from './components/BasicControl';
import RobotStatus from './components/RobotStatus';

export default function App() {
  return (
    <Connector brokerUrl="wss://test.mosquitto.org:8081" >
        <h1>Terminal URA MQTT</h1>
        <Status />
        <BasicControl />
        <RobotStatus />
    </Connector>
  );
}