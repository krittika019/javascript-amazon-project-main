// XMLHttpRequest - built-in-class provided by javascript

const xhr = new XMLHttpRequest() ; // creates a new HTTP message to send to the backend (message = request)

xhr.addEventListener('load', ()=> {
    console.log(xhr.response) ;
}) ; // listens/wait for en event and then run the function
//load means the response has loaded 
xhr.open('GET', 'https://supersimplebackend.dev/products/first') ; // parameter - type of HTTP msg sent, and where to send this http msg
xhr.send() ;// known as asynchronouse code - doesnt wait for this line of code to finish, sends the request and immediately go to next line

// xhr.response sight problem - when we send a request to the backend, it takes time for the request to travel across the internet
/*Types of request
    GET : get some info from the backend
    POST
    PUT
    DELETE
URL = uniform resource locator
-like an address, but for the internet
-helps us locate another computer on the internet
https = s = secure version of http
-Request - message sent to backend
-Response - send http message back to the frontend
request-response cycle
-backend API - list of all url paths that are supported
API = application programming interface (interface - how we interact with something)
list of this url paths are all the ways that we can interact with the backend
-the backend can respond with different types of data
1) text 
2) JSON
3) HTML
4) Image
-when we type a URL in the browser it actually sends a GET request 
so using the browser = making a GET request

*/

