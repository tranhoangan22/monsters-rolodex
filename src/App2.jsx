import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

// Class Component: React gives us the ability to write classes that have a lot more functionalities in them, compared to a function that return some HTML
class App2 extends Component {
  // We have access to the `state` object, whose properties can be accessed at any point in our class
  constructor() {
    super(); // Call the constructor method on `Component` class, which gives us access to `this.state`
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // Goal: We wait for the component, we then fetch our users and update the `state` `monsters` property with a new array of users.

  // `componentDidMount()` is invoked immediately after a component is mounted (inserted into the tree). https://reactjs.org/docs/react-component.html#componentdidmount
  // If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  componentDidMount() {
    // JavaScript native `fetch`. https://javascript.info/fetch
    // The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        // The json() method of the Response interface takes a Response stream and reads it to completion. https://developer.mozilla.org/en-US/docs/Web/API/Response/json
        // It returns a promise which resolves with a JavaScript object (which is the result of parsing the body text as JSON).
        response.json()
      )
      .then((users) => {
        this.setState({ monsters: users });
      });
  }

  // A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()).
  handleChange = (event) => {
    // to print out the updated value of `this.state` as soon as we type sth, the 2nd-argument callback is run after the `setState()` is finished
    this.setState({ searchField: event.target.value }, () =>
      console.log(this.state)
    );
  };

  // the render() method inside the App class returns the HTML
  render() {
    const { monsters, searchField } = this.state; // we don't want to modify our state, we want to keep the rawu original data just in case
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          searchField={searchField}
          placeholder="Search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App2;

// DECLARATIVE APPROACH: As soon as `this.setState`, the `state` object is updated and the component is rendered again (`render()` is called again)



// GITHUB let us serve static pages for free!!
// https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson
// https://tranhoangan22.github.io/monsters-rolodex/