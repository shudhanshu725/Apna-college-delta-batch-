// process.argv is an array containing the command line arguments passed when the Node.js process was launched.
// The first element will be 'node', the second element will be the path to the JavaScript file being executed, and the remaining elements will be any additional command line arguments.
// let arg = process.argv;
// for (let i=0;i<arg.length;i++){
//     console.log("hello ",arg[i]);
// }

// process.pid returns the PID (Process ID) of the current Node.js process.
console.log(process.pid);

// process.version returns the Node.js version string.
console.log(process.version);

// process.platform returns a string identifying the operating system platform on which the Node.js process is running.
console.log(process.platform);

// process.uptime() returns the number of seconds the current Node.js process has been running.
console.log(process.uptime());


