import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person.js'; // can omit .js from end

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>jsx only allows a single root Component to be rendered</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="Stephanie" age="26"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
