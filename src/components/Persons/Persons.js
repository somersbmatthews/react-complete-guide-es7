import React, { Component } from 'react';

import Person from './Person/Person';



class Person extends Component {
    render () {

    
    }
} = (props) => props.persons.map((person, index ) => {
        return <Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age} 
            key={person.id}
            changed={(event) => this.Changed(event, person.id)}/>  
    });

export default persons;