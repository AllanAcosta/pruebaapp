import models from '../models';


export default{
    addProduct: async(req, res, next)=>{
        try{
            const reg = await models.Articulo.create(req.body);
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message: 'ocurrio un error'
            });
        next(e); 
        }
    },
    queryProduct: async(req, res, next)=>{
        try{
            const reg = await models.Articulo.findOne({_id:req.query._id})
            .populate('categoria', {nombre: 1});
            if(!reg){
                res.status(404).send({
                    message: 'el registro no existe'
                });
            }else{
                res.status(200).json(reg);
            }
        }catch(e){
             res.status(500).send({
                message: 'ocurrio un error'
            });
        next(e);
        }
    },
    listProducts: async(req, res, next)=>{
        try{
            let  valor = req.query.valor;
            const reg = await models.Articulo.find({$or:[
                {'nombre': RegExp(valor, 'i')},
                {'descripcion': RegExp(valor, 'i')}
            ]} ,{createdAt:0})
            .populate('categoria', {nombre: 1})
            .sort({'nombre' : 1});
            res.status(200).json(reg);

        }catch(e){
             res.status(500).send({
                message: 'ocurrio un error'
            });
        next(e);
        }
    },
    listByCategory: async(req, res, next)=>{
        try{
            let  valor = req.query.valor;
            const reg = await models.Articulo.find({$or:[
                {'categoria': RegExp(valor, 'i')}
            ]} ,{createdAt:0})
            .populate('categoria', {nombre: 1})
            .sort({'nombre' : 1});
            res.status(200).json(reg);

        }catch(e){
             res.status(500).send({
                message: 'ocurrio un error'
            });
        next(e);
        }
    },
   
    updateProduct: async(req, res, next)=>{
        try{
            const reg = await models.Articulo.findByIdAndUpdate({_id:req.body._id},{categoria: req.body.categoria , codigo: req.body.codigo, nombre:req.body.nombre, descripcion:req.body.descripcion, precio: req.body.precio_Venta, stock: req.body.stock});
            res.status(200).json(reg);
        }catch(e){
             res.status(500).send({
                message: 'ocurrio un error'
            });
        next(e);
        }
    },
    removeProduct: async(req, res, next)=>{
        try{
            const reg = await models.Articulo.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
        }catch(e){
             res.status(500).send({
                message: 'ocurrio un error'
            });
        next(e);
        }
    },

}