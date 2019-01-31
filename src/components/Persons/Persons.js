import React, { Component } from 'react';

import Person from './Person/Person';



class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props)
    }
    
    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()')
    }
    
    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()')
    }
    
    render () {
        return <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age} 
            key={person.id}
            changed={(event) => this.props.Changed(event, person.id)}/> 
    
    }
}
export default Persons;