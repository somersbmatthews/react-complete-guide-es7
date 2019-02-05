import React from 'react'

import classes from './Cockpit.css'
import Aux from '../../hoc/Aux'
const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
    btnClass = classes.Red;
    }
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); 
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return(
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
            style={style}
            onClick={props.clicked}>Toggle Persons</button>
        </Aux>
    );
};

export default cockpit;