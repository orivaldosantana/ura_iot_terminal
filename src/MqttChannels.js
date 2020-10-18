import React from 'react';
import { useMqttState } from 'mqtt-react-hooks';

export default function MqttChannels() {
  const { mqtt } = useMqttState();

  function handleClick(message) {
    return mqtt.publish('URA01/input', message);
  }

  return (
    <>
        <button type="button" onClick={() => handleClick('frente')}>
            Frente 
        </button>
        <button type="button" onClick={() => handleClick('esquerda')}>
            Esquerda 
        </button>

  </>
  );
}

