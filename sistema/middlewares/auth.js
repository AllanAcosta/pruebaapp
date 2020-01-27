import tokenService from '../services/token';   

export default{
    verifyUsuario: async (req, res, next)=>{
        if(!req.headers.token){
            return res.status(404).send({
                message: 'No Token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        
        if(response.rol == 'Administrador' || response.rol == 'Vendedor' || response.rol == 'Almacenero'){
            next();
        }else{
            return res.status(403).send({
                message: "Not Authorized"
            });
        }
    },
    
    verifyAdmin: async (req, res, next)=>{
        if(!req.headers.token){
            return res.status(404).send({
                message: 'No Token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if(response.rol == 'Administrador'){
            next();
        }else{
            return res.status(403).send({
                message: "Not Authorized"
            });
        }
    },
    
    verifyAlmacenero: async (req, res, next)=>{
        if(!req.headers.token){
            return res.status(404).send({
                message: 'No Token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if(response.rol == 'Administrador' || response.rol == 'Vendedor'){
            next();
        }else{
            return res.status(403).send({
                message: "Not Authorized"
            });
        }
    },

    verifyVendedor: async (req, res, next)=>{
        if(!req.headers.token){
            return res.status(404).send({
                message: 'No Token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if(response.rol == 'Administrador' || response.rol == 'Almacenero'){
            next();
        }else{
            return res.status(403).send({
                message: "Not Authorized"
            });
        }
    } 
}