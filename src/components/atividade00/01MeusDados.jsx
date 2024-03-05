import React from "react";
import './styles.css'

function MeusDadosClassico(){
    return(
        <div>
            <h1> Nome: Thamires Taboza da Silva</h1>
            <h1>Curso: Engenharia de Software</h1>
            <h1>Universidade: Universidade Federal do Ceará</h1>
        </div>
    );
}

const MeusDadosArrowReturn = () => {
    return(
        <div>
            <h1> Nome: Thamires Taboza da Silva</h1>
            <h1>Curso: Engenharia de Software</h1>
            <h1>Universidade: Universidade Federal do Ceará</h1>
        </div>
    );
}

const MeusDadosArrowSemReturn = () => (
    <div>
        <h1> Nome: Thamires Taboza da Silva</h1>
        <h1>Curso: Engenharia de Software</h1>
        <h1>Universidade: Universidade Federal do Ceará</h1>
    </div>
  );



export default {MeusDadosClassico, MeusDadosArrowReturn, MeusDadosArrowSemReturn}