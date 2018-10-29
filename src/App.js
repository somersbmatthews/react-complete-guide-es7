import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


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
    
    if (this.state.showPersons){
      persons = (
        <div>  
          {this.state.persons.map((person, index) => {
            return <Person 
            click={this.deletePersonHandler.bind(this, index)}
            name={person.name}
            age={person.age} 
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
      </div> 
      );
      style.backgroundColor = 'red';
    }

    let classes = ['red', 'bold']

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!</p>
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
