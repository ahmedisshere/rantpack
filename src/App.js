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

  render() {
    return (

      <div className="App">
        <h1> Book List </h1>
        <Book bookName="1984" writer="George Orwell" />
        <Book bookName="The Da Vinci Code" writer="Dan Brown" />
        <Book bookName="The Alchemist" writer="Paulo Coelho" />
      </div>

    );
  }
}
// State -> state a components own information,state is generally declared on class component

// -->> we can define state in outside of the constructor -> in a class function

export default App;
