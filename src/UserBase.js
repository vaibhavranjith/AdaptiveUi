import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import _, { values } from "lodash";
import uuid from 'react-uuid';
import { statService } from './ServiceFolder/statService';



function App() {

}


/**
 * 
 * @param {*} props 
 */
function Card(props) {
  

  return (
    <div style={cardStyle}>
      <div>
        <ul>
          <li><b>Card Id: </b>{stats.id}</li>
          <li><b>count: </b>{count}</li>
        </ul>
      </div>
      <button style={buttonStyle} onClick={handleClick}>Click</button>
    </div>
  )

}


export default App;
