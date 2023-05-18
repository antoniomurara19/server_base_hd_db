const DataTypes = require('sequelize')
const db = require('../db/conn.js')

const Filme = db.define('filme',{
    titulo_filme:{
        type: DataTypes.STRING (60)
    },
    duracao:{
        type: DataTypes.FLOAT
    },
    nomes_principais_atores:{
        type: DataTypes.STRING(100)
    },
    vezes_filmes_registrado:{
        type: DataTypes.INTEGER
    }
},{
    createdAt: false,
    updatedAt: false
})

// Filme.sync = ({force:true})

module.exports = Filme