import React from 'react';

export default (props) => {

    return (
        <>
            <h2>Contador</h2>
            <label htmlFor='passo'>Passo:</label> 
            <input type="number" id="passo"  value={props.passo} 
            onChange={props.onPasso} 
            />
        </>
    )

}