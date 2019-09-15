import React, { Component, useEffect, useState } from 'react';
import './Main.css';
import Header from './Header.js';

import api from '../services/api';

export default class Main extends Component {
    render() {
        // const [users, setUsers] = useState([]);

        // useEffect(() => {
        //     async function loadUsers() {
        //         const response = await api.get('/orgs', {
        //             headers: {
        //                 user: match.params.id,
        //             }
        //         });
        //         setUsers(response.data);
        //     }
        //     loadUsers();
        // }, [match.params.id]);

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
