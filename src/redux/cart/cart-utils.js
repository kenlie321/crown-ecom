export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existing = cartItems.find(cartItem => cartItem.id == cartItemToAdd.id);
    
    if(existing){
        return cartItems.map(item => 
            item.id == cartItemToAdd.id
            ? {...item, quantity: item.quantity + 1}
            :
            item
        );
    }
    
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

export const decrement = (cartItems, cartItemToRemove) => {
    const existing = cartItems.find(cartItem => cartItem.id == cartItemToRemove.id);

    if(existing){
        return cartItems.map(item => 
            item.id == cartItemToRemove.id
            ? {...item, quantity: item.quantity - 1}
            :
            item
        );
    }

    return [...cartItems, {...cartItemToRemove, quantity: 0}];
}