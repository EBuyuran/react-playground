import React from 'react';
import BasicElement from './BasicElement.js';
// import BasicButton from './BasicButton.js';
import LabelledButton from './LabelledButton.js';
import LogSomeStuff from './LogSomeStuff.js';
import './App.css';

// Higher Order Component Example.
const LogStuff = LogSomeStuff(BasicElement);

export default class extends React.Component {
  render() {
    return (
      <div className="App">
        <LogStuff background={"brown"} />
        <LabelledButton /> {/* forwardRefs Example. */}
      </div>
    )
  }
}