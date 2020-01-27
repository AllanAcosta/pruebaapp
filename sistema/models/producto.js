import mongoose, {Schema} from 'mongoose';

const productoSchema = new Schema({
    nombreProducto: { type:String, maxlength:30, required:true },
    precio:{ type:String, maxlength:50, unique:true, required:true},
    categoria: { type:String, maxlength:20},
    descripcion: { type:String, maxlength:20 },
    cantidad: { type:Number, maxlength:5 },
    stock: { type: Number, maxlength:4 } 
});

const Producto = mongoose.model('producto', productoSchema);
export default Producto;