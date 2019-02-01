import React, { Component } from 'react';

import classes from './Person.css';


class Person extends Component {
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
        return (
            <div className={classes.Person}>       
                 <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                 <p>{this.props.children}</p>
                 <input type="text" onChange={this.props.changed} value={this.props.name}/>
    
            </div>    
        )
    }
}

export default person;