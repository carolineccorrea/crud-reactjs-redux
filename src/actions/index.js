import { GET_CUSTOMERS,
         ADD_CUSTOMER,
         UPDATE_CUSTOMER,
         DELETE_CUSTOMER,
         SET_ORDENACAO } from './types'


const getDate = () => new Date().getTime();
const generateId = () => Math.floor(Math.random() * 10000 + 10000);

const saveCustomer = (cliente) => {
    const id = generateId();
    const criadoEm = getDate();
	const atualizadoEm = getDate();

    return {...cliente,id,criadoEm,atualizadoEm}
}

// dados para teste

const data = [{
    id:1,
    nome: "Fulano",
    email:"fulano@email.com",
    telefone: 111111,
    criadoEm: new Date().getTime(),
    atualizadoEm: new Date().getTime() 
}]


export const getCustomers = () => ({ type: GET_CUSTOMERS,data });

export const addCustomer = (cliente) => ({ type:ADD_CUSTOMER,cliente: saveCustomer(cliente) });

export const updateCustomer = (id,cliente) => ({ type: UPDATE_CUSTOMER,cliente: {id,...cliente, atualizadoEm: getDate() } });

export const deleteCustomer = (id) => ({type: DELETE_CUSTOMER,id });

export const setOrdenacao = (ev) => ({ type: SET_ORDENACAO, ordenacao: ev.target.value })