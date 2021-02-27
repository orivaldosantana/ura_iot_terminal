import React from 'react'

import logo from '../URA_150px.png';

export default function URAHeader(props) {
    return (
        <header>
            <h1> {props.title} </h1>
            <img src={logo} alt="Logo do URA" width="120px" />
        </header>
    )
}