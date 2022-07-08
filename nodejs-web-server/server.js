const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('X-Powered-By', 'NodeJS');
    const { url, method } = request;
 
    if(url === '/') {
        // curl http://localhost:5000/
        if(method === 'GET'){
          response.statusCode = 200;
          response.end("<h1>Ini adalah homepage</h1>")
        }
        else{
          response.statusCode = 400;
          response.end("<h1>Halaman tidak dapat diakses dengan <any> request</h1>")
        }
        
        
    }
 
    else if(url === '/about') {
        // curl http://localhost:5000/about
        if(method === 'GET'){
          response.statusCode = 200;
          response.end("<h1>Ini adalah halaman about</h1>")
        }
        else if(method === 'POST'){
          let body = []

          request.on('data', (chunk)=>{
            body.push(chunk)
          })

          request.on('end',()=>{
            body = Buffer.concat(body).toString()
            const {name} = JSON.parse(body)
            response.statusCode = 200;
            response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`)
          })


          
        }else{
          response.statusCode = 400;
          response.end("<h1>Halaman tidak dapat diakses dengan <any> request</h1>")
        }
    
    }else{
      response.statusCode = 404;
      response.end("<h1>Halaman tidak ada</h1>")
    }
    

    // curl http://localhost:5000/<any>
};

const server = http.createServer(requestListener);

const port = 8080;
const host ='localhost';

server.listen(port,host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});