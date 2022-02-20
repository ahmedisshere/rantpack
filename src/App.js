import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';


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
         <h1> Bored? </h1>
         <Person />
      </div>
    );
  }
}

export default App;
