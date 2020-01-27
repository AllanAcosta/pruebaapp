import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes';
import pug from 'pug';

//INSTANCIA DE EXPRESS
const app = express();

//RUTA BASE DE DATOS
const dbUrl = 'mongodb://localhost:27017/dbsistema';

//ESTABLECIENDO CONEXION A LA BASE DE DATOS MONGODB
mongoose.Promise = global.Promise;
/*
    EL METODO mongoose.connect recibe dos parametros
    el primero es la ruta de la base de datos
    el segundo es un objeto con parametros predefinidos
    por el propio frramework
*/
mongoose.connect(dbUrl, {

    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
    //se utiliza una promesa para confirmar que se realizo la conexion y se hace un catch para recibir el error en cualquier caso
}).then(mongoose => console.log('Conectado a la base de dato en el puerto 27017')).catch(err => console.log(err));



//configuraciones del servidor
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//se establece el path donde estaran los archivos estaticos del front de la app
//se utiiza el metodo static de express luego path.join
app.use(express.static(path.join(__dirname, 'public')));
//Configuracion de enrutamiento a /api + el parametro de rutas establecido en /routes/categoria
app.use('/api',router);
//se deja establecido un puerto de escucha para la aplicacion en este caso el puerto 3000
//en caso de no estar disponible el metodo process.env.PORT permite que se realice la conexion a otro puerto
app.set('port', process.env.PORT || 3000);

//se coloca el servidor a la escucha con el metodo app.listen
//se utiliza el metodo app.get y se pasa como primer parametro el puerto
//como segundo parametro se utiliza una funcion flecha anonima para dar
//el mensaje que el servidor esta corriendo
app.listen(app.get('port'), () => {
    console.log('server active  on port ' + app.get('port'));

});