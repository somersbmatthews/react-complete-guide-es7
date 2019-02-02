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
    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState)
        return nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked
    }

    componentWillUpdate(nextProps) {
        console.log('[UPDATE Persons.js Inside componentWillUpdate()', nextProps)
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js Inside componentDidUpdate()')
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