import { GET_CUSTOMERS,
    ADD_CUSTOMER,
    UPDATE_CUSTOMER,
    DELETE_CUSTOMER,
    SET_ORDENACAO } from '../actions/types'

export default (state={},action) =>{
    switch (action.type){
        case GET_CUSTOMERS:
            return {
                ...state,
                customers: action.data
        }
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: state.customers.concat([action.cliente]) }
        case UPDATE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.map((_customer)=>(_customer.id === action.customer.id ) ? action.customer : _customer)
            }
        case DELETE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter((_customer)=>(_customer.id !== action.customer.id ))
            }
        case SET_ORDENACAO:
            return {
                ...state,
                ordenacao: action.ordenacao
            }
        default:
            return state;
    }
}
