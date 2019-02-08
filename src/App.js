import React, { Component } from "react";
import { HotKeys } from "react-hotkeys";
import logo from "./logo.svg";
import "./App.css";

const keyMap = {
  ShiftBackspace: "shift+backspace",
};

const handlers = {
  ShiftBackspace: () => alert("shift+backspace"),
};

const App = () => (
  <HotKeys keyMap={keyMap}>
    <HotKeys handlers={handlers}>
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    </HotKeys>
  </HotKeys>
);

export default App;
