import React from 'react';

export default props => {
    return (
        <>
        <button onClick={props.onInc}>+</button>
        <button onClick={props.onDec}>-</button>
        </>
    )
}