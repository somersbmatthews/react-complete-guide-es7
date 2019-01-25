import React from 'react'

const cockpit = (props) => {
    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); 
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return(
        <div>
            <h1>Hi, I'm a React App.</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;