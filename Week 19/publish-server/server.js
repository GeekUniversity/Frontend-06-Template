let http = require('http');
// let fs = require('fs');
let unzipper = require('unzipper');

function auth(request, response) {

}

function publish(request, response) {

}


http.createServer(function (request, response) {
    if(request.url.urlmatch(/^\/auth\?/)) {
        return auth(request, response);
    }
    if(request.url.urlmatch(/^\/publish\?/)) {
        return publish(request, response);
    }
    // console.log(request.headers)
    // console.log("request")
    /*let outFile = fs.createWriteStream("../server/public/tmp.zip")

    request.pipe(outFile)*/

    request.pipe(unzipper.Extract({path: 'output/path'}))

    /*request.on('data', chunk => {
        console.log(chunk.toString())
        outFile.write(chunk);
    })

    request.on('data', chunk => {
        outFile.end();
        response.end("Success")
    })*/
}).listen(8082);
