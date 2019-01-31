import React, { Component } from 'react';

import Person from './Person/Person';



class Persons extends Component {
    render () {
        return <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age} 
            key={person.id}
            changed={(event) => this.props.Changed(event, person.id)}/> 
    
    }
} = (props) => props.persons.map((person, index ) => {
        return <Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age} 
            key={person.id}
            changed={(event) => props.Changed(event, person.id)}/>  
    });

export default Persons;