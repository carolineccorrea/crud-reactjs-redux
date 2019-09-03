import React, { Component } from 'react';


const Customer = ( cliente ) => (
    <div>
        <p>Nome:{cliente.nome}</p>
        <p>Email:{cliente.email}</p>
        <p>Telefone:{cliente.telefone}</p>
        
    </div>
)
class CustomersList extends Component {
    render() {
        const {data} = this.props
        return (
            <div className="ListaClientes">
              
                {
                    data.map((customer,index)=>(
                        <Customer customer={customer} key={index}/>
                    ))
                }
                
            </div>
        );
    }
}

export default CustomersList;