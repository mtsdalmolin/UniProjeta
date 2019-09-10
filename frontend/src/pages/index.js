import React, { Component } from 'react';
import './index.css'
import Header from './header.js'
import Nav from './nav.js'

export default class Main extends Component {
  render() {
    return(
        <div>
            <Header />
            <div className="container">
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-KwxQKNj2D0XKEW5O/Y6haRH39PE/xry8SAoLbpbCMraqlX7kUP6KHOnrlrtvuJLR" crossorigin="anonymous"/>
                <Nav />
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
