import React from 'react';

export default function SearchInput(props) {
  return (
    <div className="input-group">
      <input 
        className="search" 
        type="text" 
        placeholder="Digite o nome da Universidade"
        onChange={ props.onChange }
        onKeyDown={ props.onKeyDown }
      />
      <span className="bar"></span>
    </div> 
  )
}