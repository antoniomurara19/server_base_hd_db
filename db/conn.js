const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('bd06','root','senai',{
    host: 'localhost',
    dialect: 'mysql'
})

// sequelize.authenticate().then(()=>{
//     console.log('O banco de dados foi conectado')
// }).catch((error)=>{
//     console.error('O banco de dados não foi conectado')
// })

module.exports = sequelize