import CartActionTypes from './cart-types';
import {addItemToCart, decrement} from './cart-utils';

const initialState = {
    cartItems: [],
    hidden: true
};

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN :
            return{
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM :
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.INCREMENT_ITEM :
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.DECREMENT_ITEM :
            return{
                ...state,
                cartItems: decrement(state.cartItems, action.payload)
            }            
        default:
            return state;
    }
};

export default cartReducer;