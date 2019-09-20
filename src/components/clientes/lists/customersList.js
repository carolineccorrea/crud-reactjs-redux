import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';


const Customer = ({customer}) => (
    <div>
        {customer.nome}&emsp;
        {customer.email}&emsp;
        {customer.telefone}&emsp;
        
        
    </div>
)


class CustomersList extends Component {
    componentDidMount(){
		this.props.getCustomers();
    }
    organizar = (a, b) => {
		const { ordenacao } = this.props
		if( ordenacao === 'a-z' ) return a.nome.localeCompare(b.nome)
		else if( ordenacao === 'z-a' ) return -1 * a.nome.localeCompare(b.nome)
		//else if( ordenacao === 'criacao' ) return new Date(a.criadoEm) - new Date(b.criadoEm)
	}
    render() {
        const {customers: data} = this.props
        console.log(data);
        return (
            <div className="ListaClientes">

                <table>
                    <tbody>
                    
                        <tr>
                            <strong>
                            Nome&emsp;
                            email&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            Telefone&emsp;&emsp;
                            </strong>
                            
                        </tr>
                    

              

                {
                    (data || []).map((customer,index)=>(
                        <Customer customer={customer} key={index}/>
                    ))
                    
                }
                

              </tbody>
                    </table>                
            </div>
        );
    }
}

const mapStateToProps = state => (
    {customers: state.customers.customers, 
     ordenacao: state.customers.ordenacao   
    } // customers1 vem do reducer e customers2 vem do props
)

export default connect(mapStateToProps,actions)(CustomersList);