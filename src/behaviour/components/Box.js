import React from 'react';
import { statService } from '../../ServiceFolder/statService';

function Box(props, ref) {

    console.log(this)

    return (
        <>
            {React.cloneElement(props.children, { id: props.id })}
        </>
    )
}


export default Box;