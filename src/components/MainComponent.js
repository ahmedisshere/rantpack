import React, { Component } from 'react';
import Book from './Book'

class MainComponent extends Component {
    state = {
        books: [
            { id: 1, bookName: "1984", writer: "George Orwell" },
            { id: 2, bookName: "Da Vinci Code", writer: "Dan Brown" },
            { id: 3, bookName: "The Alchemist", writer: "Paulo CoelhO" }
        ],
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

        // const  books = this.state.books.slice();
        // const books = this.state.books.map(item => item);

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
            border: "2px solid red",
            borderRadius: "5px",
            backgroundColor: "rgb(9, 39, 22)",
            color: "white",
            margin: "20px"
        };



        let books = null;

        if (this.state.showBooks) {

            books = this.state.books.map((book, index) => {
                return (
                    <Book
                        bookName={book.bookName}
                        writer={book.writer}
                        delete={() => this.deleteBookState(index)}
                        key={book.id}
                        inputName={(event) => this.changeWithInputState(event, index)}
                    />
                );
            });
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