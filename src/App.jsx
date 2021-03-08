import './App.css';
import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametros from './components/basicos/ComParametros';
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIF from './components/basicos/CondicionalComIf';
//import Api from './Api';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';


export default (props) =>(
    
    <div className="App">        
        <Card titulo="#09 Form Input" color="#FA6900">
            <Input />
        </Card>
        <Card titulo="#08 Comunicação Indireta" color="#FA6900">
            <Super />
        </Card>
        <Card titulo="#07 Comunicação Direta" color="#FA6900">
            <Pai sobrenome='Freitas'/>
        </Card>
        <Card titulo="#06 Componente Com Condicional v2" color="#FA6900">
            <CondicionalComIF numero={12}/>
        </Card>
        <Card titulo="#05 Componente Com Condicional v1" color="#E94C6F">
            <Condicional numero={3}/>
        </Card>
        <Card titulo="#04 Componente Com Repetição" color="#E94C6F">
            <Repeticao/>
        </Card> 
        <Card titulo="#03 Componente Com Filhos" color="#E94C6F">
            <ComFilhos>
            <ul>
                <li>Carlos</li>
                <li>José</li>
                <li>Lucas</li>
            </ul>
            </ComFilhos>
        </Card>   
        <Card titulo="#02 Componente Com Parametro" color="#E94C6F">
            <ComParametros titulo="Titulo 1" subtitulo="Subtitulo 2"/>  
            <ComParametros titulo="Olá" subtitulo="Opa" />
        </Card>
        <Card titulo="#01 Primero Componente" color="#E94C6F">
            <Primeiro />
        </Card>       
    </div>
);