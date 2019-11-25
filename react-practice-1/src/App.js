import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Ken' },
      { name: 'Kev' }, 
      { name: 'wtv' }
    ],
    anotherState: 'Some value', 
    showPersons: false
  }

  switchMethodHandler = (newName) => {
    //console.log('It is clicked!');
    // DONT DO THIS this.state.persons[0].name = "Other name";
    this.setState({
      persons: [
      { name: newName },
      { name: 'Kev' }, 
      { name: 'wtv' }
      ] 
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
      { name: 'Ken' },
      { name: event.target.value }, 
      { name: 'wtv' }
      ] 
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

  const style = {
    //JSX style of using styles.
    backgroundColor: 'white', 
    font: 'inherit',
    border: '1x solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;

  if(this.state.showPersons) {
    persons = (
      <div>
        <Person name={this.state.persons[0].name}>Is this working?</Person>
        <Person change={this.nameChangeHandler} click={this.switchMethodHandler.bind(this, "LOL")} name={this.state.persons[1].name}>Now?</Person>
        <Person name={this.state.persons[2].name}>How about now?</Person>
      </div>
    )
  }

    return (
      <div className="App">
        <h1>Hi! lol</h1>
        <button style={style} onClick={this.togglePersonHandler}>Show Person</button>
        {persons}    
      </div>
    );
  }
}

export default App;
