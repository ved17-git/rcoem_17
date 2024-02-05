const http=require('http')

const server=http.createServer((req,res)=>{
res.end("server is running from ngp")
})

server.listen(3000,()=>{
console.log("server is running")
})