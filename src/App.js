import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import _, { values } from "lodash";
import uuid from 'react-uuid';
import { statService } from './ServiceFolder/statService';


var containerState = {}

const comp = (a, b) => {
  return a.count - b.count
}

const Cards = () => {
  let cards = {}
  for (let i = 0; i < 5; i++) {
    cards[i] = { body: {
      layout : <Card height={150} width={150} statistics={{ id: i, count: 0 }} key={i} ></Card>,
      count : 0
    } }
  }
  return cards
}

let cardsGlobal = {}

function App() {
  let cardsOverall = Cards()

  const [actualCards, setLayouts] = useState(Object.keys(cardsOverall).map((val) => cardsOverall[val].body.layout))
  const [cardObjects, setObject] = useState(cardsOverall)

  cardsGlobal = cardObjects

  useEffect(() => {
    console.log("Parent Render!!!!!")

    statService.getStats().subscribe((message) => {

      console.log(message)
      if (message != undefined) {
        let {id, count} = message.stats
        
        cardsGlobal[id].body.count = count

        let arr = Object.keys(cardsGlobal).map((val) => cardsGlobal[val].body)
        console.log(arr)

        let sorted = arr.sort(comp)
        console.log(sorted)

        let layouts = sorted.map((val) => val.layout)
        console.log(cardsGlobal)

        setLayouts(layouts)
        setObject(cardsGlobal)
      }
    })
  }, [])


  console.log(actualCards)
  return (
    <>
      <div style={{ display: "flex" }}>
        {
          actualCards
        }
        {/* <Card height={150} width={150} CardId={1} statistics={stats}></Card>
        <Card height={150} width={150} CardId={2} statistics={stats}></Card> */}
      </div>
    </>
  );
}


/**
 * 
 * @param {*} props 
 */
function Card(props) {
  let stats = props.statistics
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    statService.pushStats({ id: stats.id, count: count + 1 })
    setCount(count + 1)

  }

  function handleClick() {
    incrementCount()
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
          <li><b>Card Id: </b>{stats.id}</li>
          <li><b>count: </b>{count}</li>
        </ul>
      </div>
      <button style={buttonStyle} onClick={handleClick}>Click</button>
    </div>
  )

}


export default App;
