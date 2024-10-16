//external libraries = code that is outside of our project
//use PascalCase for things that generate objects = start every word with a capital


function Cart(localStorageKey) {
    const cart = {
        cartItems : undefined,
        loadFromStorage(){
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) ;
            if(!this.cartItems) {
                this.cartItems = [{
                    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity: 2 ,
                    deliveryOptionId : '1' 
                    },{
                        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                        quantity: 1 ,
                        deliveryOptionId : '2' 
                    }
                ] ;
            }
        },
        saveToStorage(){
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems)) ;
        },
        addToCart(productId){
            let matchingItem ;
        
            this.cartItems.forEach((cartitem) => {
                if(productId === cartitem.productId){
                    matchingItem = cartitem ;
                }
            });

            const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`) ;
            const quantity = Number(quantitySelector.value) ;
            
            if(matchingItem){
        
                matchingItem.quantity +=  quantity;
        
            }else{
                this.cartItems.push({
                    productId : productId,
                    quantity : quantity,
                    deliveryOptionsId : '1'
                });
            }
            this.saveToStorage() ;
        },
    
        removeFromCart(productId) {
            const newCart = [] ;
            this.cartItems.forEach((cartItem) => {
                if ( cartItem.productId !== productId) {
                    newCart.push(cartItem) ;
                } 
            });
        
            this.cartItems = newCart ;
            this.saveToStorage() ;
        },
        calculateCartQuantity(){
            let cartQuantity = 0 ;
        
            this.cartItems.forEach((cartItem) => {
                cartQuantity += cartItem.quantity ;
            });
            return cartQuantity ;
        },
        updateQuantity(productId, newQuantity){
            let matchingProduct ;
            this.cartItems.forEach((cartItem)=>{
                if(cartItem.productId === productId){
                    matchingProduct = cartItem ;
                }
            });
            matchingProduct.quantity = newQuantity ;
            this.saveToStorage() ;
        },
        updateDeliveryOption(productId, deliveryOptionId) {
            let matchingItem ;
        
            this.cartItems.forEach((cartitem) => {
                if(productId === cartitem.productId){
                    matchingItem = cartitem ;
                }
            });
        
            matchingItem.deliveryOptionId = deliveryOptionId ;
            this.saveToStorage() ;
        }
    
    } ;
    return cart ;
}



const cart = Cart('cart-oop') ;
const businesscart = Cart('cart-business') ;

cart.loadFromStorage() ;
businesscart.loadFromStorage() ;

console.log(cart) ;
console.log(businesscart) ;




