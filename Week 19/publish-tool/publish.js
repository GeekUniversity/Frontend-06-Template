let http = require('http');
let fs = require('fs');
let archiver = require('archiver');
let child_process = require('child_process');
let querystring = require('querystring');

child_process.exec(`open https://github.com/login/oauth/authorize?client_id=`)

http.createServer(function (request, response) {
    let query = querystring.parse(request.url.match(/^\/\?([\s\S]+)$/)[1]);
    console.log(query)
}).listen(8083);

function publish(token) {
    let request = http.request({
        hostname: "127.0.0.1",
        port: 8082,
        method: "POST",
        path:"/publish?token=" + token,
        headers: {
            'Content-Type': 'application/octet-Stream',
        }
    }, response => {
        console.log(response);
    });

    const archive = archiver('zip', {
        zlib: {level: 9}
    })

    archive.directory('./sample/', false);

    archive.finalize();

    archive.pipe(request)
}

/*fs.stat("./sample.html",(err, stats) => {
    let request = http.request({
        hostname: "127.0.0.1",
        port: 8082,
        method: "POST",
        headers: {
            'Content-Type': 'application/octet-Stream',
            'Content-Length': stats.size
        }
    }, response => {
        console.log(response);
    });

    let file = fs.createReadStream("./sample.html")

    file.pipe(request)

    file.on('end', () => request.end())
})*/



// let file = fs.createReadStream("./sample.html")




/*file.pipe(request)

file.on('end', () => request.end())*/



/*file.on('data', chunk => {
    console.log(chunk.toString())
    request.write(chunk);
})
file.on('end', chunk => {
    console.log(chunk.toString())
    request.end(chunk);
})*/
