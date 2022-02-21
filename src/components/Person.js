import React, { Component } from "react";

let Person = (props) => {
    console.log(props);
    return (
        <div>
            <h3> Gamer {props.gamer} & Rank {props.rank} </h3>
            <h4>Intel: {props.children} </h4>
        </div>
    );
}

// class Person extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h3> Gamer {this.props.gamer} & Rank {this.props.rank} </h3>
//                 <h4>Intel: {this.props.children} </h4>
//             </div>
//         );
//     }
// }


export default Person;