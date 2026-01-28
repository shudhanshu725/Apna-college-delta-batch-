//WHAT IS JSON 
//JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data in web applications between a server and a client. JSON is built on two structures: a collection of name/value pairs (often realized as an object, record, struct, dictionary, hash table, keyed list, or associative array) and an ordered list of values (often realized as an array, vector, list, or sequence).

//Example of JSON
const exampleJSON = {
    "name": "John Doe",
    "age": 30,    
    "isStudent": false,
    "courses": ["Math", "Science", "History"],
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "zip": "12345"
    }
};

jasonData = JSON.stringify(exampleJSON); // Convert JavaScript object to JSON string
console.log(jasonData);

// Convert JSON string back to JavaScript object
const parsedData = JSON.parse(jasonData);
console.log(parsedData);

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


//Adding imformations in URLs
