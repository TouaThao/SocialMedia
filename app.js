const express = require('express')

const app = express();

const morgan = require('morgan')

//bring in route
const postRoute = require('./routes/post')

//middleware variable
const myMiddleWare = (req, res, next)=>{
    console.log('middleWare apply')
    next()
}

//middleware 
/*
what is a middleware? it's something between start and finish
we could use it to check or do in the middle. like loging message ,etc
*/
app.use(morgan('dev'));
app.use(myMiddleWare)

app.use('',postRoute)

const port= 8080
app.listen(port, () =>{
    console.log(`app listen is here from port:${port}`)
}) 