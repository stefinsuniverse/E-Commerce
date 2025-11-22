import express from "express"
import { addProduct, removeProduct, singleProduct, listProduct} from "../controllers/productController.js"

const productRouter = express.Router();

productRouter.post('/add', addProduct);
productRouter.post('/remove', removeProduct);
productRouter.post('/:single', singleProduct);
productRouter.put('/list', listProduct);
 
export default productRouter;