import React from 'react';
import './Main.css';
import './addForm.css';
import './Header.css';

export default function Header () {
  return(
    <div>
      
      <div className="container">
        <h1>Em construção..asdasda</h1>
        <form>
          
          <input type="text" name="nomeIES" placeholder="Digite o nome da IES"/>
          <h2> X</h2>
          <input type="number" name="IGC2014" placeholder="Insira o IGC Discreto de X"/>
          <h3>Despesas de X</h3>
          <input type="number" name="emp" placeholder="Empenhado"/>
          <input type="number" name="gastp" placeholder="Gasto"/>
          <input type="number" name="pago" placeholder="Pago"/>
        </form>
      </div>
    </div>
  );
}