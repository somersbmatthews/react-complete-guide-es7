import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit.js'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import WithClass from './hoc/WithClass';
import Aux from './hoc/aux'
import classes from './App.css';




class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props)
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
    this.inputElement.focus()
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE [App.js] Inside componentWillReceiveProps()', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE [App.js] Inside shouldComponentUpdate()', nextProps, nextState)
    return nextState.persons !== this.state.persons ||
    nextState.showPersons !== this.state.showPersons;
  }

  componentWillUpdate(nextProps) {
    console.log('[UPDATE [App.js] Inside componentWillUpdate()', nextProps)
  } 

  componentDidUpdate() {
    console.log('[UPDATE [App.js] Inside componentDidUpdate()')
  }

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
            <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler} 
              changed={this.nameChangedHandler}/> 


         </div> 
      );
      // the following code is old jsx for persons variable above
                  /* {this.state.persons.map((person, index) => {
              
              return <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age} 
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}/>
                  
            })} */



      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      };
    }

    return (
      
        <Aux>
          <button onClick={() => {this.setState({showPersons; true})}}>Show Persons</button>
          <Cockpit appTitle={this.props.title}
                   showPersons={this.state.showPersons}
                   persons={this.state.persons}
                   clicked={this.togglePersonsHandler} />
          {persons}
        </Aux>
      
    );
   
  }
}
 // return React.createElement('div', {className: 'App'}, 'h1', "I'm a React App!")
export default App;
