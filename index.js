const express = require('express')
const app = express()
const cors = require('cors')


const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
  };

const PORT = process.env.PORT || 80
app.use(express.static('./'),cors()
);

app.get('/', (req, res)=>{
    res.sendFile('./index.html',  { root : __dirname})
})

app.get('/math.xml', (req, res)=>{
    res.sendFile('./math.xml', { root : __dirname})
})

app.get('/graphics.xml', (req, res)=>{
    res.sendFile('./graphics.xml', { root : __dirname})
})

app.get('/author', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from('<h4 id="author" title="GossJS">Шабан Даниэл</h4>'));
    
})


app.listen(PORT)