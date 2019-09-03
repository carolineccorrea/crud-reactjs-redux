import React, { Component } from 'react';


const Customer = ( cliente ) => (
    <div>
        <p>{cliente.nome}</p>
        <p>{cliente.email}</p>
        <p>{cliente.telefone}</p>
        
    </div>
)
class CustomersList extends Component {
    render() {
        const {data} = this.props
        return (
            <div className="ListaClientes">

                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>

              <tbody>

                {
                    data.map((customer,index)=>(
                        <Customer customer={customer} key={index}/>
                    ))
                }

              </tbody>
                    </table>                
            </div>
        );
    }
}

export default CustomersList;