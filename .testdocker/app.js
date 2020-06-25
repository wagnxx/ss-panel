const http = require('http')


const server = http.createServer((req,res)=>{

	res.end("hello docker")

});

server.listen(8888,()=>{
	console.log("server of docker is runnning over 4000");
});
