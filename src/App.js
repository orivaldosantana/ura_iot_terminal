import React from 'react';

import { Connector } from 'mqtt-react-hooks';
import Status from './Status';
import BasicControl from './components/BasicControl';
import RobotStatus from './components/RobotStatus';

export default function App() {
  return (
    <Connector brokerUrl="ws://157.230.89.7:1884"  >
        <h1>Terminal URA MQTT</h1>
        <Status />
        <BasicControl />
        <RobotStatus />
    </Connector>
  );
}