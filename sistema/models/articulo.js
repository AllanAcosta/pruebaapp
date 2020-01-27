//Importacion de mongoose
import mongoose,{Schema} from 'mongoose';

//Se crea una constante que guardara la instancia del Schema
//depues se untiliza un objeto que es el que almacenara las
//propiedades del mismo
const articuloSchema = new Schema({
    //Se establecen los parametros del objeto
    //Pueden se de distintos tipos segun el proposito
    //Para mas informacion visitar la documentacion de mongoose
    categoria: {type: Schema.ObjectId, ref: 'categoria'},
    codigo: {type: String, maxlength: 64},
    nombre: {type: String, maxlength: 50, unique: true, required: true},
    descripcion: {type: String, maxlength: 255},
    precio_Venta: {type: Number, required: true},
    stock: {type: Number, maxlength: 5},
    estado: {type: Number, default: 1},
    createdAt: {type: Date, default:Date.now}
});

//Se crea una constante que utilizara el metodo model el cual recibira como parametros
//un nombre y el Schema creado anteriormente
const Articulo = mongoose.model('articulo',articuloSchema);

//Exportacion de la contante que contiene la informacion del modelo
export default Articulo;