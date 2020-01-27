//Importacion de mongoose
import mongoose,{Schema} from 'mongoose';

//Se crea una constante que guardara la instancia del Schema
//depues se untiliza un objeto que es el que almacenara las
//propiedades del mismo
const categoriaSchema = new Schema({
    //Se establecen los parametros del objeto
    //Pueden se de distintos tipos segun el proposito
    //Para mas informacion visitar la documentacion de mongoose
    nombre: {type: String, maxlength: 50, unique: true, required: true},
    descripcion: {type: String, maxlength: 255},
    estado: {type: Number, default: 1},
    createdAt: {type: Date, default:Date.now}

});

//Se crea una constante que utilizara el metodo model el cual recibira como parametros
//un nombre y el Schema creado anteriormente
const Categoria = mongoose.model('categoria',categoriaSchema);

//Exportacion de la contante que contiene la informacion del modelo
export default Categoria;