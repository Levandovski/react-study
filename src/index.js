import './index.css'
import React from 'react'
import ReactDom from 'react-dom'


import Primeiro from './components/Primeiro';
import ComParametros from './components/ComParametros';
//import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';

ReactDom.render(
    <div>
        <Card titulo="Exercício X">
            Conteúdo
        </Card>
        {/*<ComFilhos>
            <ul>
                <li>Carlos</li>
                <li>José</li>
                <li>Lucas</li>
            </ul>
        </ComFilhos>*/}
        
    {/*<Primeiro></Primeiro>
    <ComParametros titulo="Titulo 1" subtitulo="Subtitulo 2"/>  
    <ComParametros titulo="Olá" subtitulo="Opa" />*/}
    </div>,
    document.getElementById('root')
)



