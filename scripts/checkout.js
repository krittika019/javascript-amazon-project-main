import { renderorderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import  { loadProductsFetch } from "../data/products.js"
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js' ;
//import '../data/backend-practice.js' ;
// promise is built-in class - when created it, runs the inner function immediately
// resolve - function, lets us control when to go to the next step
// a promise actually creates a separate thread of code
// promises are designed in this way that allows Javascript to do multiple things at the same time
// why promise because multiple callbacks cause a lot of nesting
// can run multiple promises at the same time by Promise.all() - wait for all of them to finish
// promises are a better way to wait for a asynchronous code to finish

Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve() ;
        });
    })

]).then((values) => {
    renderorderSummary() ;
    renderPaymentSummary() ;
});

/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1') ;
    }) ;

}).then((value) => {
    console.log(value);
    
    return new Promise((resolve) => {
        loadCart(() => {
            resolve() ;
        });
    });

}).then(() => {
    renderorderSummary() ;
    renderPaymentSummary() ;
}) ;
*/

// loadProducts(() => {
//     loadCart(() => {
//         renderorderSummary() ;
//         renderPaymentSummary() ;
//     });
// });


