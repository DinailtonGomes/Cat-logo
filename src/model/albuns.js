import Sequelize from  'sequelize'
import {connection} from '../database/connection.js'

export const discografia = connection.define('discografia', {
    
    id : {
        type : Sequelize.INTEGER,
        allouwNull : false,
        primaryKey: true,
        autoIncrement: true
    }, 
    nome_album:{
        type : Sequelize.STRING,
        allouwNull : false        
    },
    ano : {
        type : Sequelize.STRING,
        allouwNull : false        
    },
    gravadora :{
        type : Sequelize.STRING,
        allouwNull : false        
    },
    imagem :{
        type : Sequelize.STRING,
        allouwNull : false        
    },
    iframe : {
        type : Sequelize.STRING,
        allouwNull : true       
    }
    
},{
    freezeTableName:true,
    createAt: false,
    updateAt: false,
    timestamps: false
})
function initTable(){
    discografia.async()
}
initTable()
