//WHAT IS JSON 
//JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data in web applications between a server and a client. JSON is built on two structures: a collection of name/value pairs (often realized as an object, record, struct, dictionary, hash table, keyed list, or associative array) and an ordered list of values (often realized as an array, vector, list, or sequence).

//Example of JSON
// const exampleJSON = {
//     "name": "John Doe",
//     "age": 30,    
//     "isStudent": false,
//     "courses": ["Math", "Science", "History"],
//     "address": {
//         "street": "123 Main St",
//         "city": "Anytown",
//         "zip": "12345"
//     }
// };

// jasonData = JSON.stringify(exampleJSON); // Convert JavaScript object to JSON string
// console.log(jasonData);

// // Convert JSON string back to JavaScript object
// const parsedData = JSON.parse(jasonData);
// console.log(parsedData);

//Ajax - Asynchronous JavaScript and XML. It allows for asynchronous communication with the server without reloading the page.
//bina page reload kiye data exchange karna

//https verbs - HTTP Verb batata hai ki server se tum kya kaam karwana chahte ho
//GET - Retrieve data from a server
//POST - Send data to a server to create/update a resource
//PUT - Update a current resource with new data
//DELETE - Remove a resource from the server
//PATCH - Partially update a resource on the server

//Status codes - Indicate the result of the HTTP request
//200 - OK: The request was successful.
//201 - Created: The request was successful and a new resource was created.
//400 - Bad Request: The server could not understand the request due to invalid syntax.
//401 - Unauthorized: The client must authenticate itself to get the requested response.
//403 - Forbidden: The client does not have access rights to the content.
//404 - Not Found: The server can not find the requested resource.
//500 - Internal Server Error: The server has encountered a situation it doesn't know how to handle.
//503 - Service Unavailable: The server is not ready to handle the request, often due to maintenance or overload.


//Http header
//HTTP headers are key-value pairs sent between the client and server with an HTTP request or response. They provide essential information about the request or response, such as content type(data ka type), Authorization(login/token), Accept(kiss type ka data chahiye),User agent(browser info), caching policies, and cookies(stored data). Headers help both the client and server understand how to process the data being exchanged.
//Aap inspect karke network tab me jaake headers dekh sakte ho.

//Our first API call using Fetch
// let apiUrl = 'https://catfact.ninja/fact'; // Example API endpoint


//     fetch(apiUrl) // Making a GET request to the API and you can see in network tab
//         .then((response) => {
//             console.log(response); // Log the response object
//             return response.json(); // Parse the JSON from the response
//         })
//         .then((data) => {
//             console.log(data); // Log the parsed data
//         })
//         .catch((err) => {
//             console.error('Error fetching data:', err);
//         });
// //using fetch with async await
// async function fetchCatFact()
// {
//     try {
//         let response = await fetch(apiUrl); // Await the fetch call
//         console.log(response); // Log the response object
//         let data = await response.json(); // Await the JSON parsing
//         console.log(data); // Log the parsed data
//     } catch (err) {
//         console.error('Error fetching data:', err);
//     }
// }

// fetchCatFact();

//Axios - popular JavaScript library used to make HTTP requests from the browser or Node.js. It simplifies the process of sending asynchronous requests to REST endpoints and handling responses. Axios provides a clean and easy-to-use API for making GET, POST, PUT, DELETE, and other types of HTTP requests. It also supports features like request and response interceptors, automatic JSON data transformation, and error handling. Axios is widely used in web development for interacting with APIs and fetching data from servers.

//Example of axios
let btn = document.querySelector('button');
let p = document.querySelector('#catFact');

btn.addEventListener("click", async () => {
    console.log("button clicked");
    const fact = await fetchCatFact(); // Await the fact
    p.innerText = fact; // Set the inner text of the <p> element
});

let apiUrl = 'https://catfact.ninja/fact'; 

async function fetchCatFact() {
    try {
        let response = await axios.get(apiUrl); // Making a GET request using Axios
        console.log(response); // Log the entire response object
        return response.data.fact; // Return the fact from the response
    } catch (err) {
        console.error('Error fetching data with Axios:', err);
        return "Error fetching fact"; // Return an error message if there's an issue
    }
}
