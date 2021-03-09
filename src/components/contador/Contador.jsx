import React, { Component } from 'react';
import './Contador.css';
import PassoForm from './PassoForm';
import Display from './Display';
import Botoes from './Botoes';

export default class Contador extends Component{
     //Component baseado em classe

     constructor(props){
         super(props)
      
         this.state = {
            passo:props.passo || 1,
            valor:props.valor || 0
         }
   
     }

     inc=()=>{
        this.setState({
            valor: this.state.valor+this.state.passo
        })
     }
     dec=()=>{
        this.setState({
            valor: this.state.valor- this.state.passo  
        })
     }
    
     render(){
      
         return (
             <div className="Contador">

                <PassoForm 
                    passo={this.state.passo}
                    onPasso={e => this.setState({passo:+e.target.value})} 
                />

                <Display 
                    passo={this.state.passo} 
                    valor={this.state.valor}
                />
                    
                <Botoes
                    onInc={this.inc}
                    onDec={this.dec}
                />
                 
             </div>
             
         );
     }
}