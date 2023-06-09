const DataTypes = require('sequelize')
const db = require('../db/conn.js')

const Socio = db.define('socio',{
    cartao_socio:{
        type: DataTypes.INTEGER
    },
    nome_socio:{
        type: DataTypes.STRING(30)
    },
    end_socio:{
        type: DataTypes.STRING(30)
    },
    tel_socio:{
        type: DataTypes.STRING(20)
    },
    email_socio:{
        type: DataTypes.STRING(20)
    }
},{
    createdAt: false,
    updatedAt: false
})

// Socio.sync = ({force:true})

module.exports = Socio