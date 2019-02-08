import React, { Component } from 'react';
import { HotKeys } from "react-hotkeys";
import logo from './logo.svg';
import './App.css';

const keyMap = {
  ShiftBackspace: "shift+backspace",
};

const handlers = {
  ShiftBackspace: () => alert('shift+backspace'),
};

class App extends Component {
  render() {
    return (
      <HotKeys keyMap={keyMap}>
      <HotKeys handlers={handlers}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      </HotKeys>
      </HotKeys>
    );
  }
}

export default App;
