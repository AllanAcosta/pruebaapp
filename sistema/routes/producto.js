import routerx from 'express-promise-router';
import productoController from '../controllers/productoController';
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add', auth.verifyUsuario, productoController.addProduct);
router.get('/query', auth.verifyUsuario, productoController.queryProduct);
router.get('/list', auth.verifyUsuario, productoController.listProducts);
router.get('/listByCategory', auth.verifyUsuario, productoController.listProducts);
router.put('/update', auth.verifyUsuario, productoController.updateProduct);
router.delete('/remove', auth.verifyUsuario, productoController.removeProduct);
    ;


export default router;