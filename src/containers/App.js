import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import classes from './App.css';




class App extends Component {
  
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }   
    ],
    showPersons: false
  } 

  switchNameHandler = (newName) => {
    console.log('Was clicked!');
    this.setState({
      persons: [
        { id: 0, name: 'newName', age: 28 },
        { id: 1, name: 'Manu', age: 29 },
        { id: 2, name: 'Stephanie', age: 27 }   
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }

  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    let btnClass = '';
    
    if (this.state.showPersons){
      persons = (
        <div>  
          {this.state.persons.map((person, index) => {
             
          <Persons 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
              
          })}
         </div> 
      )

      btnClass = classes.Red;

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      };
    }

    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); 
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      
        <div className={classes.App}>
          <h1>Hi, I'm a React App.</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
          </div>
      
    );
    // return React.createElement('div', {className: 'App'}, 'h1', "I'm a React App!")
  }
}

export default App;
