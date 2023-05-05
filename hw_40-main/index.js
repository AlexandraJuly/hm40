const http = require('http');

const users = [
    {id: 1, old: 1},
    {id: 2, old: 2},
    {id: 3, old: 3},
    {id: 4, old: 4}
];
const html = `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>hm40</title>
    </head>
    <body>
    <h1 style="text-align: center; padding-top: 20px">
        hm №40
    </h1>
    <h2 style="text-align: center">
        <a href="http://localhost:8199/users", style=" color: red;">go to url: '/users'</a>
    </h2>
`;

http.createServer((req, res)=> {
    switch (req.url) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
            break
        case '/users':
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(users));
            break
        default:
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('404: not found');
    }
}).listen(8199, (_) => {console.log('Server started')});
