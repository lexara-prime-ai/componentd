const log = (message:any) => console.log(message);

// IMPORTS
import http from 'http';
import * as fs from 'fs/promises';
import fetch from 'node-fetch';

// CREATE SERVER INSTANCE
const SERVER = http.createServer( async (request, response) => {
    log(`${request.url}\t${request.method}`);


    if (request.url === '/') {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
    }
    


    // LISTEN ON PORT SPECIFIED PORT
}).listen(5500, () => {
    log('App is running at: http://127.0.0.1:5500');
});


