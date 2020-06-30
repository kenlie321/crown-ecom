import SHOP_DATA from '../../pages/shop/data';

const initialState = {
    collections:SHOP_DATA
}

const shopReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_SHOP_DATA':
            return{
                ...state,
                collections:action.payload
            }
        default:
            return state;
    }
};

export default shopReducer;