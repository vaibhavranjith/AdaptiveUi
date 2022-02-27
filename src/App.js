import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import _, { values } from "lodash";
import uuid from 'react-uuid';
import { db, statService } from './ServiceFolder/statService';
import Box from './behaviour/components/Box';
import Test from "./user/Components/Test1"
import Container from './behaviour/components/Container';
var containerState = {}

const comp = (a, b) => {
  return db[a]['sell'] - db[b]['sell']
}

const Cards = () => {
  let cards = {}
  for (let i = 0; i < 5; i++) {
    cards[i] = {
      body: {
        layout: <Card statistics={{ id: i, count: 0 }} key={i} ></Card>,
        count: 0
      }
    }
  }
  return cards
}

let cardsGlobal = {}

// function App() {
//   let cardsOverall = Cards()

//   const [layouts, setLayouts] = useState(Object.keys(cardsOverall).map((val) => cardsOverall[val].body.layout))
//   const [cardObjects, setObject] = useState(cardsOverall)

//   cardsGlobal = cardObjects

//   useEffect(() => {
//     console.log("Parent Render!!!!!")

//     statService.getStats().subscribe((message) => {

//       console.log(message)
//       if (message != undefined) {
//         let { id, count } = message.stats

//         cardsGlobal[id].body.count = count

//         let arr = Object.keys(cardsGlobal).map((val) => cardsGlobal[val].body)
//         console.log(arr)

//         let sorted = arr.sort(comp)
//         console.log(sorted)

//         let newLayouts = sorted.map((val) => val.layout)
//         console.log(cardsGlobal)

//         setLayouts(newLayouts)
//         setObject(cardsGlobal)
//       }
//     })
//   }, [])

//   return (
//     <>
//       <div style={{ display: "flex" }}>
//         {
//           layouts
//         }
//       </div>
//     </>
//   );
// }

function App() {
  return (
    <>
      <Container brainFx={comp} behaveFx={"sort"}>
        <Box key={1} >
          <Test></Test>
        </Box>
        <Box key={2}>
          <Test></Test>
        </Box>
        <Box key={3}>
          <Test></Test>
        </Box>
        <Box key={4}>
          <Test></Test>
        </Box>
        <Box key={5}>
          <Test></Test>
        </Box>
      </Container>
    </>
  )
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
    <>
      {props.layout}
    </>
  )

}


export default App;
