import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import _ from "lodash";
import uuid from 'react-uuid';


var containerState = {}

function App() {
  //The stat of button click
  const [stats, setStats] = useState({});
  containerState.stats = stats;
  containerState.setStats = handleStatsChange;
  function handleStatsChange(newStats) {
    let obj = _.cloneDeep(newStats);
    setTimeout(function () { setStats(obj) }, 0);
  }
  useEffect(() => {
    console.log("Parent Render")
  }, [])

  var cardId = [{ id: 1 }, 2, 3]

  return (
    <>
      <div style={{ display: "flex" }}>
        <Card height={150} width={150} CardId={1} statistics={stats}></Card>
        <Card height={150} width={150} CardId={2} statistics={stats}></Card>
      </div>
    </>
  );
}




/**
 * 
 * @param {*} props 
 */
function Card(props) {
  var CardId = props.CardId;
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(CardId);
    var newStats = containerState.stats;
    newStats[CardId] = { count: 0, rank: 0 };
    containerState.setStats(newStats);
    // console.log(CardId, props.statistics);
  }, [])
  // Function
  useEffect(() => {
    console.log("stats updated")
    console.log(props.statistics)
  }, [props.statistics]);

  function incrementCount() {
    var newStats = props.statistics;
    newStats[CardId].count += 1;
    containerState.setStats(newStats)
  }

  function handleClick() {
    incrementCount()
    // incrementCount();
  }
  // Styling of the card
  const cardStyle = {
    height: props.height + "px",
    width: props.width + "px",
    borderRadius: "10px",
    padding: "50px",
    boxShadow: "10px 10px 5px lightblue",
    backgroundColor: "red",
    margin: "10px"
  }

  // Styling of the button
  const buttonStyle = {
    height: "20px",
    width: "50px",
    default: "none"
  }


  return (
    <div style={cardStyle}>
      <div>
        <ul>
          <li><b>Card Id: </b>{props.CardId}</li>
          <li><b>count: </b>{props.statistics[CardId] === undefined ? 0 : props.statistics[CardId].count}</li>
        </ul>
      </div>
      <button style={buttonStyle} onClick={handleClick}>Click</button>
    </div>
  )

}


export default App;
