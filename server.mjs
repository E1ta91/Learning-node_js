import {createServer} from 'node:http';

// Create HTTP server
const server = createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('<h1>We have an HTTP server</h1>')
});

// Listen for incoming request
server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running');
});

// Normal function vs arrow function
function handleRequest() {}
const handleRequest = () => {}