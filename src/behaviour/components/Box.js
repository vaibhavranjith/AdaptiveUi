import React, { useEffect } from 'react';
import { statService } from '../../ServiceFolder/statService';

function Box(props, ref) {


    return (
        <React.Fragment key={props.id}>
            {React.cloneElement(props.children, { id: props.id })}
        </React.Fragment>
    )
}


export default Box;