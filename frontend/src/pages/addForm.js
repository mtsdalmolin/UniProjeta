import React from 'react';
import './Main.css';
import './addForm.css';
import Header from './Header';

export default function AddForm () {
  return(
    <div>
      <div className="heading">
        <Header />
      </div>
      <div className="container">
        <h1>Inserir IES</h1>
        <h3>Para inserir uma IES, preencha os campos abaixo e clique no botão ...</h3>
        <form>
          
          <input type="text" name="nomeIES" placeholder="Digite o nome da IES"/>
          <h2> X</h2>
          <input type="number" name="IGC2014" placeholder="Insira o IGC Discreto de X"/>
          <h3>Despesas de X</h3>
          <input type="number" name="emp" placeholder="Empenhado"/>
          <input type="number" name="gastp" placeholder="Gasto"/>
          <input type="number" name="pago" placeholder="Pago"/>
        </form>
        <h2>***Inserção disponível em breve...</h2>
      </div>
    </div>
  );
}