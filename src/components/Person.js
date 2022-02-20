import React from "react";

let Person = (props) => {
    console.log(props);
    return (
        <div>
            <h3> Gamer {props.gamer} & Rank {props.rank} </h3>
            <h4>Intel: {props.children} </h4>
        </div>
    );
}

export default Person;