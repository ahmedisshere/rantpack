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
    otherProp: "some other random bullshit.."
  };

  changeBookState = newBookName => {

    this.setState({
      books: [
        { bookName: newBookName, writer: "George Orwell" },
        { bookName: "The Da Vinci Code", writer: "Dan Brown" },
        { bookName: "Metamorphosis", writer: "Franz Kafka" }
      ]
    });

  }

  changeWithInputChange = event => {

    this.setState({
      books: [
        { bookName: event.target.value, writer: "George Orwell" },
        { bookName: "The Da Vinci Code", writer: "Dan BrOwn" },
        { bookName: "Metamorphosis", writer: "Franz Kafka" }
      ]
    });

  }

  render() {

    const style = {

      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "rgb(9, 39, 22)",
      color: "white"

    };


    const booksState = this.state.books;

    const books = booksState.map(book => {

      return (

        <Book bookName={book.bookName} writer={book.writer}/>

      );

    });



    // console.log(booksState);
    console.log(books);




    return (

      <div className="App">

        <h1 style={style}> Book List </h1>
        <button onClick={() => this.changeBookState("Nineteen Eighty-Four")}>Change State</button>

        <input type="text" onChange={this.changeWithInputChange} />
        {books}
      </div>

    );
  }
}
// State -> state a components own information,state is generally declared on class component

// -->> we can define state in outside of the constructor -> in a class function

export default App;
