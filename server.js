'use strict' // ensina o node a ser mais criterioso.

const http = require ('http');
const debug = require('debug')('nodestr:server');
const express = require ('express');
const { title } = require('process');

const app = express()
const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

const server =  http.createServer(app)
const router = express.Router()

const route = router.get('/',(req,res,next) => {
        res.status(200).send ({
            title: "Node Store APÌ",
            version: "0.0.1"
        })
})
app.use('/',route)


server.listen(port)

console.log('API rodando na porta ' + port)

function normalizePort(val){
    const port = parseInt(val,10)
    if (isNaN(port)){
        return val
    }
    
    if (port >=0){
        return port;
    }

    return false
}