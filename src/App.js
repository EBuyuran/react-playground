import React from 'react';
// import BasicButton from './BasicButton.js';
import LabelledButton from './LabelledButton.js';
import LogSomeStuff from './LogSomeStuff.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.abc = LogSomeStuff(<LabelledButton text={"FORWARD MY REFS TO CONSOLE"} label={"Button Label"} />);
  }

  render() {
    return (
      <div className="App">
        {<this.abc />}
      </div>
    );
  }
}

export default App;