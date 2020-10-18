import React from 'react';

import { useMqttState } from 'mqtt-react-hooks';

export default function Status() {

  /*
  * Status list
  * - offline
  * - connected
  * - reconnecting
  * - closed
  */
  const { status } = useMqttState();

  return (
    <p>{`Status: ${status}`}</p>
  );
}