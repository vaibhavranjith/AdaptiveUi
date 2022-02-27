import React from "react";
import { statService } from "../../ServiceFolder/statService";


function Test(props) {

    console.log(props.id)
    const comp = (a, b) => {
        return a.count - b.count
    }

    return (
        <div style={{ backgroundColor: "green", width: "40px", height: "40px", margin: "20px" }}></div>
    )
}

export default Test;