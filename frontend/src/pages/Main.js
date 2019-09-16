import React, { Component, useEffect, useState } from 'react';
import './Main.css';
import { Link } from "react-router-dom";

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
                 <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-KwxQKNj2D0XKEW5O/Y6haRH39PE/xry8SAoLbpbCMraqlX7kUP6KHOnrlrtvuJLR" crossorigin="anonymous"/>
                <div className="list">
                    <div className="num">
                       <h3> <Link to="/about/45" >UFSM - Universidade Federal de Santa Maria</Link></h3>
                    </div>
                    <div className="num">
                        <h3>UFSC - Universidade Federal de Santa Catarina</h3>
                    </div>
                    <div className="num">
                        <h3>UFPR - Universidade Federal do Paraná</h3>
                    </div>
                </div>
            </div>
        );
    }
}
