const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

let guardarDb = () =>{
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data,(err)=>{
        if (err) throw err;
        //console.log('Tarea Agregada con exito');
    })
}

const obtenerListadoTareas = ()=>{
    try{
        listadoPorHacer = require('../db/data.json');
    }catch(err){
        listadoPorHacer = [];
    }
}

let crear = (descripcion) =>{

    obtenerListadoTareas();
     let porHacer = {
        descripcion,
        completado : false
    };

    listadoPorHacer.push(porHacer);
    guardarDb();

    return porHacer; 
}


let listarTareas = (completado) =>{
    obtenerListadoTareas();
    
    if(completado == undefined){
        listadoPorHacer.forEach(tarea => {
        console.log('===== Por hacer ====='.green);
        console.log(tarea.descripcion);
        console.log('Estado : ', tarea.completado);
        console.log('====================='.green);
    })
    }else{
        let listadoNew = listadoPorHacer.filter(tarea=>{
            return tarea.completado.toString() === completado;
        });
    
        listadoNew.forEach(tarea => {
            console.log('===== Por hacer ====='.green);
            console.log(tarea.descripcion);
            console.log('Estado : ', tarea.completado);
            console.log('====================='.green);
        });
    }
   
    
}

const actualizar = (descripcion, completado=true)=>{
    obtenerListadoTareas();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if(index>=0){
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    }else{
        return false;
    }
}
const borrar = (descripcion)=>{
    obtenerListadoTareas();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if(index>=0){
        listadoPorHacer.splice(index,1);
        guardarDb();
        console.log('Tarea eliminada con exito')
        return true;
    }else{
        console.log('No existe tarea con esa descripción')
        return false;
    }
}

module.exports = {crear, listarTareas, actualizar, borrar}