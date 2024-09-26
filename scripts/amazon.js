import {cart, addToCart} from '../data/cart.js' ;
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

/* import * as cartModule from 'filepath';

cartModule.cart
cartModule.addToCart('id');
*/ 
/* create a module
1. create a file
2. dont load the file with <script>

any variables we create inside the file, will be contained inside the file

get a variable out of a file
1. add type="module" attribute
2.export
3.import
*/

/*const products = [{
    image :'images/products/athletic-cotton-socks-6-pairs.jpg' ,
    name : 'Black and Gray Athletic Cotton Socks - 6 Pairs' ,
    rating : {
        stars : 4.5,
        count: 87
    },
    priceCents: 1090
},{
    image : 'images/products/intermediate-composite-basketball.jpg',
    name : 'Intermediate Size Basketball',
    rating : {
        stars : 4 ,
        count : 127
    },
    priceCents : 2095
},{
    image : 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name : 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating : {
        stars : 4.5,
        count : 56
    },
    priceCents : 799
},{
    image : 'images/products/black-2-slot-toaster.jpg',
    name : '2 Slot Toaster - Black',
    rating : {
        star : 5,
        count : 2197
    },
    priceCents : 1899 
}];
*/
let productsHTML = '' ;

products.forEach((product)=> {
    productsHTML += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                $${formatCurrency(matchingProduct.priceCents)}
            </div>

            <div class="product-quantity-container ">
                <select class="js-quantity-selector-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart js-added-cart-${product.id}" >
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary 
            js-add-to-cart" data-product-id="${product.id}">
                Add to Cart
            </button>
            </div>
        `;
});


function addedToCartDisplay(productId){
    document.querySelector(`.js-added-cart-${productId}`).classList.add('js-added-to-cart') ;
    const prevTimeoutId = addedMessageTimeouts[productId] ;
    if(prevTimeoutId){
        clearTimeout(prevTimeoutId) ;
    }
    
    const timeoutId = setTimeout(()=> {
        document.querySelector(`.js-added-cart-${productId}`).classList.remove('js-added-to-cart');
    },2000);

    addedMessageTimeouts[productId] = timeoutId ;

}

function updateCartQuantity(){
    let cartQuantity = 0 ;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity ;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity ;
    
}

document.querySelector('.js-products-grid').innerHTML = productsHTML ;
const addedMessageTimeouts = {} ;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId ;

        addToCart(productId) ;
        addedToCartDisplay(productId) ;
        updateCartQuantity() ;
        
    });
});
