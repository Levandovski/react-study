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
import Contador from './components/contador/Contador';

export default (props) =>(
    
    <div className="App"> 
        <h1>Fundamentos do React</h1>     
        <div className="Cards">
            <Card titulo="#10 Contador" color="#5CF2E8">
                <Contador passo={10} valor={100}/>
            </Card>
            <Card titulo="#09 Form Input" color="#FA6900">
                <Input />
            </Card>
            <Card titulo="#08 Comunicação Indireta" color="#29335C">
                <Super />
            </Card>
            <Card titulo="#07 Comunicação Direta" color="#368cbf">
                <Pai sobrenome='Freitas'/>
            </Card>
            <Card titulo="#06 Componente Com Condicional v2" color="#7ebc59">
                <CondicionalComIF numero={12}/>
            </Card>
            <Card titulo="#05 Componente Com Condicional v1" color="#FFC857">
                <Condicional numero={3}/>
            </Card>
            <Card titulo="#04 Componente Com Repetição" color="#E5446D">
                <Repeticao/>
            </Card> 
            <Card titulo="#03 Componente Com Filhos" color="#fb3c3c">
                <ComFilhos>
                <ul>
                    <li>Carlos</li>
                    <li>José</li>
                    <li>Lucas</li>
                </ul>
                </ComFilhos>
            </Card>   
            <Card titulo="#02 Componente Com Parametro" color="#ffc300">
                <ComParametros titulo="Titulo 1" subtitulo="Subtitulo 2"/>  
                <ComParametros titulo="Olá" subtitulo="Opa" />
            </Card>
            <Card titulo="#01 Primero Componente" color="#02c9c9">
                <Primeiro />
            </Card>       
        </div>       
    </div>
);