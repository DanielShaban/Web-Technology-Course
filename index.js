const express = require('express')
const app = express()

const PORT = process.env.PORT || 80

app.get('/', (req, res)=>{
    // res.sendFile('/index.html')
    res.end('es')
})

app.get('/math', (req, res)=>{
    res.sendFile('/math.xml')
})

app.get('/graphics', (req, res)=>{
    res.sendFile('/graphics.xml')
})

app.listen(PORT)