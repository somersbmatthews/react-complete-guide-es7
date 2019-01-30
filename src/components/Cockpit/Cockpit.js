import React from 'react'

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
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
            style={style}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;