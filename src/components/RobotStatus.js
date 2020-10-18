import React from 'react';

import { useSubscription } from 'mqtt-react-hooks';

export default function RobotStatus() {

  const { lastMessage } = useSubscription('URA01/output');

  return (
    <>
        <p> Topic: {lastMessage && lastMessage.topic} </p> 
        <p> Message: {lastMessage && lastMessage.message}  </p> 
    </>
  );
}