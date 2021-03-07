import './App.css';
import React from 'react';
import Primeiro from './components/Primeiro';
import ComParametros from './components/ComParametros';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIF from './components/CondicionalComIf';


export default (props) =>(
    <div className="App">
        <Card titulo="#06 Componente Com Condicional v2">
            <CondicionalComIF numero={12}/>
        </Card>
        <Card titulo="#05 Componente Com Condicional v1">
            <Condicional numero={3}/>
        </Card>
        <Card titulo="#04 Componente Com Repetição">
            <Repeticao/>
        </Card> 
        <Card titulo="#03 Componente Com Filhos">
            <ComFilhos>
            <ul>
                <li>Carlos</li>
                <li>José</li>
                <li>Lucas</li>
            </ul>
            </ComFilhos>
        </Card>   
        <Card titulo="#02 Componente Com Parametro">
            <ComParametros titulo="Titulo 1" subtitulo="Subtitulo 2"/>  
            <ComParametros titulo="Olá" subtitulo="Opa" />
        </Card>
        <Card titulo="#01 Primero Componente">
            <Primeiro />
        </Card>       
    </div>
);