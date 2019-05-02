import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 4, name: 'Max', age: 28},
      { id: 7, name: 'Manu', age: 29},
      { id: 34, name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // uses new spread operator
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;
    let buttonClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed = {(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      buttonClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React app</h1>
          <p className={assignedClasses.join(' ')}>jsx only allows a single root Component to be rendered</p>
          <button
            className={buttonClass}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
