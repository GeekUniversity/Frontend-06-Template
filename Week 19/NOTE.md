#online web service
##Nodejs stream.Readable
###close event
###data event
###pipe
##stream.writable
###write
###end
###drain event
##Nodejs Package
###archiver
###unzipper
###querystring


##Oauth
###publish.js
####1打开 https://github.com/login/oauth/authorize
####3创建server，接受token，后点击发布

###server.js
####2auth路由：接收code，用code + client_id + client_secret换token
####4publish路由：用token换取用户信息，检查权限，接受发布

