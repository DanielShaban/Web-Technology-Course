const express = require('express')
const app = express()

const PORT = process.env.PORT || 80
app.use(express.static('./'));

app.get('/', (req, res)=>{
    res.sendFile('./index.html',  { root : __dirname})
})

app.get('/math.xml', (req, res)=>{
    res.sendFile('./math.xml', { root : __dirname})
})

app.get('/graphics.xml', (req, res)=>{
    res.sendFile('./graphics.xml', { root : __dirname})
})

app.listen(PORT)