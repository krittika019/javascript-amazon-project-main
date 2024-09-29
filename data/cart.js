
export let cart = JSON.parse(localStorage.getItem('cart')) ;

if(!cart) {cart = [{
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2 
    },{
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1
    }] ;
}

/*export let cart = [{
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2 
    },{
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1
    }] ;*/

function saveToStorage(productId){
    localStorage.setItem('cart', JSON.stringify(productId)) ;
}

export function addToCart(productId){
    let matchingItem ;

    cart.forEach((cartitem) => {
        if(productId === cartitem.productId){
            matchingItem = cartitem ;
        }
    });

    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`) ;
    const quantity = Number(quantitySelector.value) ;

    if(matchingItem){

        matchingItem.quantity +=  quantity;

    }else{
        cart.push({
            productId : productId,
            quantity : quantity
        });
    }
    saveToStorage(productId) ;
}

export function removeFromCart(productId) {
    const newCart = [] ;
    cart.forEach((cartItem) => {
        if ( cartItem.id !== productId) {
            newCart.push(cartItem) ;
        } 
    });

    cart = newCart ;
    saveToStorage(productId) ;
}
