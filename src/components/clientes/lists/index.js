import React, { Component } from 'react';
import Search from './search';
import Order from './order';
import Form from '../forms';
import CustomersList from './customersList'



const Options = () => (
<div>
    <div>
        <Order/>
    </div>
    <div>
        <Search/>
    </div>

</div>
)

class Lists extends Component {
    render() {
        return (
            <div className="Listagem">
                <div>
                    <h3>Lista de Clientes</h3>
                </div>
                <hr/>
                    <Options/>
                    <CustomersList/>
                    <Form/>
                    
            </div>
        );
    }
}

export default Lists;