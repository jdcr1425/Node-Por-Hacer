const argv = require('yargs')
             .command('crear','Crear un elemento por hacer',{
                descripcion:{
                    demand:true,
                    alias:'d',
                    default:'',
                    desc:'descripcion de la tarea a crear'
                }
             })
             .command('actualizar', 'Actualiza el estado completado de una tarea', {
                descripcion:{
                    demand:true,
                    alias:'d',
                    default:'',
                    desc:'Descripcion de la tarea a actualizar'
                }, 
                completado:{
                    alias:'c',
                    default:true
                }
             })
             .command('borrar', 'Borrar una tarea',{
                descripcion:{
                    demand:true,
                    alias:'d',
                    desc:'Descripcion de la tarea a borrar'
                }
             })
             .command('listar', "Listar las tareas", {
                completado:{
                    alias:'c',
                    desc:'Indica si quiere listar solo tareas completadas o no completadas'
                }
             })
             .help()
             .argv

module.exports = {argv}