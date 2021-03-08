import React, { Component } from 'react';

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
             <div>

                 <h2>Contador</h2>
                 <h4>Passo: {this.state.passo}</h4>    
                 <h4>Valor: {this.state.valor}</h4>            
         
                 <button onClick={this.inc}>+</button>
                 <button onClick={this.dec}>-</button>
             </div>
             
         );
     }
}