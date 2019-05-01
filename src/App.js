import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './Components/TodoItem';
import {Button} from 'reactstrap';
import Example from './Components/Example';
class App extends Component {
  render() {
    return (
        <div>
          <Example />
        </div>
    );
  } 
}

export default App;
