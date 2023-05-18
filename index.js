const express = require('express')
const app = express()
const conn = require('./db/conn.js')
const Usuario = require('./models/User.js')
const Socio = require('./models/Socio.js')
const Filme = require('./models/Filme.js')
const exphbs = require('express-handlebars')


const PORT = '3000'
const hostname = 'localhost'

/* -------------config express------------ */

app.use(express.urlencoded({force:true}))
app.use(express.json())
app.use(express.static('public'))

/* ---------- config handlebars --------- */

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

/* --------------- rotas ---------------- */

app.get('/lista', async (req,res)=>{
    const dados = await Usuario.findAll({raw:true})
    console.log(dados)
    res.render('lista',{valor: dados})
})

app.get('/form',(req,res)=>{
    res.render('form')
})

app.post('/a', (req,res)=>{
    res.send('FORMULÁRIO RECEBDIDO!')
})

app.get('/',(req,res)=>{
    res.render('home')
})

/* ------ connection banco de dados ------- */

conn.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`O servidor está rodando em: ${hostname} ${PORT}`)
    })
}).catch((error)=>{
    console.error(`O servidor não funcionou: ${error}`)
})

