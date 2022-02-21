import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';


// functional component ->>


// function App() {
//   return (
//     <div className="App">
//       <h1> Bored? </h1>
//       <Person />
//     </div>
//   ); 
// }


// Class component -->>

class App extends Component {
  // lets add state
  // 16.8 includes react hooks which is somekind of similar feature

  // constructor() {
  //   super();
  //   this.state = {};      ->> we can do this as below 
  // }

  state = {
    books: [
      { bookName: "1994", writer: "George Orwell" },
      { bookName: "The Da Vinci Code", writer: "Dan Brown" },
      { bookName: "The Alchemist", writer: "Paulo Coelho" }
    ],
    otherProp: "some other random props"
  };

  render() {
    return (

      <div className="App">
        <h1> Book List </h1>
        <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} />
        <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} />
        <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} />
      </div>

    );
  }
}
// State -> state a components own information,state is generally declared on class component

// -->> we can define state in outside of the constructor -> in a class function

export default App;
