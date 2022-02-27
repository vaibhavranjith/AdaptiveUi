import React, { useEffect, useLayoutEffect } from "react";
import Box from "./Box";
import { statService } from '../../ServiceFolder/statService'
import objectHash from "object-hash";
import { set } from "lodash";

// const Cards = () => {
//     let cards = {}
//     for (let i = 0; i < 5; i++) {
//         cards[i] = {
//             body: {
//                 layout: <Card statistics={{ id: i, count: 0 }} key={i} ></Card>,
//                 count: 0
//             }
//         }
//     }
//     return cards
// } storeAction("sell")
// {
//     tag:"sell",
//     key:""
// }


function Container(props) {
    const [layouts, setLayouts] = React.useState(props.children)

    function handleRender(children, message) {
        let {brainFx, behaveFx} = props
        // let {action} = message
        

        //array of keys
        children.map((val) => {
            console.log(val.key)
        })

        // setLayouts(newLayouts)
        // console.log(newLayouts);
    }

    useEffect(() => {
        setLayouts(props.children);
        var subscription = statService.getStats().subscribe((message) => {
            console.log("Triggering behaviour function ...")

            if(message == undefined)
            handleRender(props.children, message);
        })
        return () => {
            subscription.unsubscribe();
        }
    }, [props.children]);
    // useEffect(() => {
    //     statService.getStats().subscribe((message) => {
    //         console.log(message)
    //         if (message != undefined) {
    //             let { id, count } = message.stats
    //             cardsGlobal[id].body.count = count
    //             let arr = Object.keys(cardsGlobal).map((val) => cardsGlobal[val].body)
    //             console.log(arr)
    //             let sorted = arr.sort(comp)
    //             console.log(sorted)
    //             let newLayouts = sorted.map((val) => val.layout)
    //             console.log(cardsGlobal)
    //             setLayouts(newLayouts)
    //             setObject(cardsGlobal)
    //         }
    //     })
    // }, [])
    return (
        <>
            {layouts}
        </>
    )
}

export default Container;