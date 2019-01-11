import React, { Component } from 'react';
import LabelledButton from './LabelledButton.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LabelledButton text={"Text"} label={"Button Label"} />
      </div>
    );
  }
}

export default App;