import React, { useState } from 'react';


export default (props) => {
        //Valor //Func que altera o valor
    const [nome, setNome] = useState('Pedro');

    
    return (
        <>
        <h3>{nome}</h3>
          <input type="text" value={nome} onChange={e => setNome(e.target.value)}></input>
        </>
    )
}