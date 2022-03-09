import React from "react";
import '../stylesheets/Book.css';

const Book = props => {

    return (
        <div className="Book">
            <h3 onClick={props.delete}>Book: {props.bookName} </h3>
            <h4>Writter: {props.writer}</h4>
            <input className="instyle" type="text" onChange={props.inputName} value={props.bookName}/>
        </div>
    );
}

export default Book;