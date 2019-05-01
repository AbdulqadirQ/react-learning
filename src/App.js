import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 26}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>jsx only allows a single root Component to be rendered</p>
        <button
          style={buttonStyle}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {
          this.state.showPersons === true ?
            <div >
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}/>
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, "Max!")}
                changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}/>
            </div>
          : null
        }
      </div>
    );
  }
}

export default App;
