
export const cart = [] ;

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
}

