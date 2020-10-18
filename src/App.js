import React from 'react';

import { Connector } from 'mqtt-react-hooks';


export default function App() {
  return (
    <Connector brokerUrl="mqtt://test.mosquitto.org:8080">
        <h1>Teste ...</h1>
    </Connector>
  );
}