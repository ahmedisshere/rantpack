import React from "react";

let Person = (props) => {
    console.log(props);
    return (
        <div>
            <h3> Gamer {props.gamer} & Rank {props.rank} </h3>
        </div>
    );
}

export default Person;