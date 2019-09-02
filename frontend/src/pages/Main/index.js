import React, { Component } from 'react';
import './style.css'
import Header from './header.js'

export default class Main extends Component {
  render() {
    return(
        <div>
            <Header />
            <div className="container">
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-KwxQKNj2D0XKEW5O/Y6haRH39PE/xry8SAoLbpbCMraqlX7kUP6KHOnrlrtvuJLR" crossorigin="anonymous"/>
                <div className="nav">
                        <a href="https://github.com/UniProjeta" target="_blank"><i className="fab fa-github"></i></a>
                        <div class="input-group">
                            <input class="search" type="text" placeholder="Digite o nome da Universidade"/><span class="bar"></span>
                        </div>
                </div>
                <div className="list">
                    <div className="num">
                        <h3>UFSM - Universidade Federal de Santa Maria</h3>
                    </div>
                    <div className="num">
                        <h3>UFSC - Universidade Federal de Santa Catarina</h3>
                    </div>
                    <div className="num">
                        <h3>UFPR - Universidade Federal do Paraná</h3>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
