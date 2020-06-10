import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

function Hi(props) {
  return (
  
      <div className="hi">
          <h1><strong>Mirza Jahangeer  {props.work} {props.age -3} </strong></h1>
          <ul>
            <li>React Assignment</li>
            <li>SPM Assignment</li>
            <li>Bootstrap Assignment</li>
          </ul>

        </div>
  )
}

export default Hi;
