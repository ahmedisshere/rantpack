import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';

// Class component -->>

class App extends Component {

  // 16.8 includes react hooks which is somekind of similar feature

  state = {
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "Da Vinci Code", writer: "Dan Brown" },
      { bookName: "The Alchemist", writer: "Paulo Coelho" }
    ],
  };

  changeWithInputChange = event => {

    this.setState({
      books: [
        { bookName: event.target.value, writer: "George Orwell" },
        { bookName: "The Da Vinci Code", writer: "Dan BrOwn" },
        { bookName: "Metamorphosis", writer: "Franz Kafka" }
      ]
    });
  }

  deleteBookState = index => {
    // const  books = this.state.books.slice();
    // const books = this.state.books.map(item => item);

    const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({

      books: books

    });
  };

  render() {

    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "rgb(9, 39, 22)",
      color: "white"
    };


    const books = this.state.books.map((book,index) => {

      return (
        <Book bookName={book.bookName} 
        writer={book.writer}
        delete={() => this.deleteBookState(index)}/>
      );
      
    });

    return (

      <div className="App">
        <h1 style={style}> Book List </h1>

        {books}

      </div>

    );
  }
}
// State -> state a components own information,state is generally declared on class component

// -->> we can define state in outside of the constructor -> in a class function

export default App;
