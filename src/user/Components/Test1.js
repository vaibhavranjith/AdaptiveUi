import React from "react";
import { statService } from "../../ServiceFolder/statService";


function Test(props) {

    console.log(props.id)

    const handleAction = (event) => {
        statService.storeAction({ key: props.id, action: "sell" })
    }

    return (
        <div style={{ backgroundColor: "green", width: "40px", height: "40px", margin: "20px" }}></div>
    )
}

export default Test;