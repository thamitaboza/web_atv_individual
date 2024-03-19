import React from 'react';

const Filho = ({altura, peso}) => {
  const calcularIMC = () => {
    return peso / (altura * altura);
  }

  const getIMCMensagem = () => {
    const imc = calcularIMC();
    if (imc < 18) {
      return <h2 style={{color:'red'}}>Abaixo do peso</h2>;
    }else if (imc > 25) {
      return <h2 style={{color:'red'}}>Acima do peso</h2>;
    }else {
      return <h2 style={{color:'red'}}>Peso ideal</h2>;
    }
  }

  const imc = calcularIMC(altura, peso)

  return(
    <div>
      <h2>O cálculo do IMC é: {imc.toFixed(3)}</h2>
      {getIMCMensagem(imc)}
    </div>
  );
}

export default Filho;
