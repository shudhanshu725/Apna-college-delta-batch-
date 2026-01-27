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

