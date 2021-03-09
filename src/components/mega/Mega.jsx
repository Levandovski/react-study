import React, {useState} from 'react';


export default props => {
    
    const [numeros, setNumeros]=useState(Array(props.qtdNumeros).fill(0))
    
    function gerarNumerosNaoContidos(array){
        const min=1;
        const max=60;
        const novoNumero = parseInt(Math.random() * (max-min)) + min
        return array.includes(novoNumero) 
               ? gerarNumerosNaoContidos(array)
               : novoNumero
    }

    function gerarNumeros(){
        const novoArray = Array(props.qtdNumeros).fill(0)
                               .reduce(a => [...a, gerarNumerosNaoContidos(a)], [])
                               .sort((a,b) => a-b)
        setNumeros(novoArray)
    }
    return (
        <>
            <h3>Mega</h3>
            <h3>{numeros.join(' ')}</h3>
            <button onClick={gerarNumeros}>Gerar Numero</button>
        </>
    );
}