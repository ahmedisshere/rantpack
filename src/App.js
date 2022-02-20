import React from 'react';
import './App.css';


function App() {

  // return (

  //   <div className="App">
  //     <h1> Bored? </h1>
  //     <Carousel />
  //   </div>

  // );
  return React.createElement('div', {className: "App"}, React.createElement('h1', null, "sup cartman?"),<Carousel/>);
}

function Carousel() {

  return (

    <h1> Go Moo your neighbours lawn ~ </h1>

  );
}

export default App;
