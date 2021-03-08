import React from 'react';
import Filho from './Filho';

export default props =>{
    return (
        <>
            {/**...props é para fazer um copio dos objeto que são passados como parametros */}
            <Filho {...props}><strong>João</strong></Filho>
            <Filho sobrenome={props.sobrenome}>Maria</Filho>
            <Filho sobrenome="Silva">Pedro</Filho>
        </>
    )
}