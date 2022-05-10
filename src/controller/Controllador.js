import {connection} from '../database/connection.js'
import { discografia} from "../model/albuns.js"

export const getIndex = async (req,res) => {
    try{
           
        const listDisco = await discografia.findAll()   
         res.render('index.ejs', {
             listDisco
         })
    }
    catch(error){
        res.send(error.message)
    }
}
export const getDetalhes = async (req,res) => {
    try {
       
        
        const album_detalhes = await discografia.findByPk(req.params.id)
        res.render('detalhes.ejs', {
            album_detalhes
        })    
    }   
    catch (error){
        res.send(error.message)
    }     
}
export const getDeletar = async (req,res) =>{
    console.log(req.params.id)
       try{
        
        await discografia.destroy({
            where: {
                id:req.params.id
            }
        })
           res.redirect('/')
       }
       catch(error){
           res.send(error.message)
       }
}
export const getCriar = (req,res) =>{
    res.render('criar.ejs')
}

export const postCriar = async (req,res) =>{
    const {nome_album,ano,gravadora,imagem,iframe} = req.body  
   
    try{
        if(!nome_album || !ano || !gravadora || !imagem || !iframe ){
            res.send(`Valor em branco digite novamente`)
        }
        else{
            await discografia.create(req.body)
            
        res.render('criar.ejs',{
           
        })
        }
       
        
    }
    catch(error){
        res.send(error.message)       

    }        
}
export const getEditar = async (req,res) => {
    try{
        const album =  await discografia.findByPk(req.params.id)
        res.render('editar.ejs',{
            album
        })    

    }
    catch(error){
        res.send(error.message)
    }
    
        
}
export const postEditar = async (req,res) =>{
    try{
        const {nome_album,ano,gravadora,imagem,iframe} = req.body
        await discografia.update({
            nome_album: nome_album,
            ano :ano,
            gravadora : gravadora ,
            imagem :imagem ,
            iframe: iframe 
        },{
            where : {
                id: req.params.id,
            }
        })
        res.redirect('/')
    }
    catch(error){
        res.send(error.message)
    }
}

