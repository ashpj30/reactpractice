import React from 'react';
//import React, { Component } from 'react';

//function Abc(){
//return <h1>helllo functional components</h1>
//}

const Abc = (props) => {
    console.log(props)
 return <h1>functional {props.name}</h1>
}
export default Abc;