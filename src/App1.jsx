import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Class Component: React gives us the ability to write classes that have a lot more functionalities in them, compared to a function that return some HTML
class App1 extends React.Component {
  // We have access to the `state` object, whose properties can be accessed at any point in our class
  constructor() {
    super();  // Call the constructor method on `Component` class, which gives us access to `this.state`
    this.state = { string: "Hello An Tran" }
  }

  // the render() method inside the App class returns the HTML
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: "Hello Lydia Schulze"})}>Change Text</button>
        </header>
      </div>
    );
  }
}


export default App1;

// DECLARATIVE APPROACH: As soon as `this.setState`, the `state` object is updated and the component is rendered again (`render()` is called again)

// LIFE CYCLE METHODS: methods that get called at different stages of when this component gets rendered. https://reactjs.org/docs/state-and-lifecycle.html 