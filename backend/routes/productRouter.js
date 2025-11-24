import express from "express"
import { addProduct, removeProduct, singleProduct, listProduct } from "../controllers/productController.js"
import upload from "../middleware/multer.js";

const productRouter = express.Router();

productRouter.post('/add', upload.fields([
    { name: 'image1,maxcCount:1' },
    { name: 'image2,maxcCount:1' },
    { name: 'image3,maxcCount:1' },
    { name: 'image4,maxcCount:1' }
]), addProduct);
productRouter.post('/remove', removeProduct);
productRouter.post('/:single', singleProduct);
productRouter.put('/list', listProduct);

export default productRouter;