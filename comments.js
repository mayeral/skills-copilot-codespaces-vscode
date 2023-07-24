// Create web server and serve comments.html
// Use this to test locally
// To run, use the following command:
// node comments.js
// Then, open your browser and go to http://localhost:8080/comments.html
// To stop the server, press Ctrl+C in the terminal

const http = require('http');
const fs = require('fs');

// Create web server
const server = http.createServer(function (req, res) {
    // Send HTML file to browser
    fs.readFile('comments.html', 'utf8', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
});

// Listen for requests on port 8080
server.listen(8080);
