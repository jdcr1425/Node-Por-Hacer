const {argv} = require('./config/yargs');
const colors = require('colors');
const {crear, listarTareas, actualizar, borrar} = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch(comando){
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
    break;
    case 'listar':
        listarTareas(argv.completado);
    break;
    case 'actualizar':
        actualizar(argv.descripcion, argv.completado);
    break;
    case 'borrar':
        borrar(argv.descripcion);
    break;
    default:
    break;

}



