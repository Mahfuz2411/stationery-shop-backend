import express from 'express';
import * as productController from './product.controller';

const productRouter = express.Router();

productRouter.post('/', productController.createProduct);
productRouter.get('/', productController.getAllProducts);
productRouter.get('/:productId', productController.getProductById); 

export default productRouter;