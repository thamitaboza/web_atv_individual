import React from 'react';
import Pai from './components/atividade01/questao01/01Pai';
import * as PC from './components/atividade01/02MeuPC'
import * as Batalha from './components/atividade01/03Batalha'

function App() {
  return(
    <div>
      <h1>Atividade 01 - IMC</h1>
      <Pai />
      <hr />

      <h1>Atividade 02 - PCs</h1>
      <h5><PC.PlacaDeVideo nome="NVIDIA GeForce RTX 3080" preco={4500.50} /></h5>
      <h5><PC.PlacaMae nome="Gigabyte B450 AORUS Elite" preco={1200.99} /></h5>
      <h5><PC.Memoria nome="DDR4" preco={400.00} /></h5>
      <hr />
      
      <h1>Atividade 03 - Batalha de Gigantes</h1>
      <Batalha.World>
        <Batalha.Arena name="Maracanã"/>
        <Batalha.Arena name="Allianz"/>
      </Batalha.World>
      <hr />
      <Batalha.World>
        <Batalha.Arena2 name="Maracanã">
            <Batalha.Hero name="Geralt de Rívia" />
            <Batalha.Enemy name="Mycroft Holmes"/>
        </Batalha.Arena2>
      </Batalha.World>
    </div>
  );
}

export default App;
