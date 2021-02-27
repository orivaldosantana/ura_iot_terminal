import React from 'react';
import './RobotStatus.css'

import { useSubscription, useMqttState } from 'mqtt-react-hooks';

export default function RobotStatus() {

  const { lastMessage } = useSubscription('URA01/output');
  const { status } = useMqttState();

  return (
    <div className="Card">
      <div className="Title">
        <h3> Robot Status </h3>
      </div>
      <div className="Content" >
        <p> <strong>Topic: </strong> {lastMessage && lastMessage.topic} </p>
        <p> <strong>Message: </strong> {lastMessage && lastMessage.message}  </p>
        <p> <strong>Conection: </strong> {status} </p>
      </div>
    </div>
  );
}