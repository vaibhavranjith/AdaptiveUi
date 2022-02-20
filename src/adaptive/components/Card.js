import React, { useMemo } from "react";
import _ from "lodash";
import { useEffect } from "react";
import { useState } from "react";
// import { useMemo } from "react";
import { containerState } from "../../App";
import uuid from "react-uuid";


//managing cardId
// concurrency issue in managing parent
// Try replacing uuid
//Replicate Object
// precendecen of events.



/**
 * 
 * @param {*} props 
 */
function Card(props) {
    var CardId = props.CardId;
    var Count = 0;
    useEffect(() => {
        //push this cards metric
        console.log("CardId", props.CardId)
        var newStats = _.cloneDeep(containerState.stats);
        newStats[CardId] = { count: 0, rank: 0 };
        containerState.setStats(newStats);
        console.log(containerState.stats);
        // var newStat = props.capture.stats;
        // newStat[props.CardId] = { count: 0, rank: 0 }
        // console.log(newStat);
        // console.log(newStat)
        // console.log(props.capture.stats)
        // Count = props.capture.stats[CardId]
        // console.log(Count)
    }, [])
    // Function
    function incrementCount() {
        var newStat = _.cloneDeep(props.capture.stats);
        newStat[props.CardId].count += 1;
        console.log(props.capture.stats);
        props.capture.setStat(newStat);

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
        backgroundColor: "red"
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
                    <li><b>count: </b>{Count}</li>
                </ul>
            </div>
            <button style={buttonStyle} onClick={handleClick}>Click</button>
        </div>
    )

}

export default Card;