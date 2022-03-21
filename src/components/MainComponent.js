import React, { Component } from 'react';
import bookList from '../assests/books.js';
import BookList from './lists/BookList';


class MainComponent extends Component {
    state = {

        books: bookList,
        showBooks: true

    };


    changeWithInputState = (event, index) => {

        const book = {
            ...this.state.books[index]
        }

        book.bookName = event.target.value;
        const books = [...this.state.books];
        books[index] = book;

        this.setState({ books: books });
    }



    deleteBookState = index => {
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books: books
        });
    };



    toggleBooks = () => {

        this.setState({ showBooks: !this.state.showBooks });

    }



    render() {

        const style = {
            border: "2px solid tomato",
            borderRadius: "5px",
            backgroundColor: "#252D3F",
            color: "white",
            margin: "20px"
        };


        let books = null;

        if (this.state.showBooks) {
            books = <BookList books={this.state.books} />
        }



        return (

            <div className="App">
                <h1 style={style}> Random States </h1>
                <button className='btn' onClick={this.toggleBooks}>Toggle Books</button>

                {books}

            </div>

        );
    }

}

export default MainComponent;