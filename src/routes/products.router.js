import { Router } from "express";
import ProductController from "../controllers/product.controller.js"

const ProductsRoutes = Router();

const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = new ProductController()

ProductsRoutes.get('/', getProducts)

ProductsRoutes.get('/:pid', getProduct)

ProductsRoutes.post('/', createProduct);

ProductsRoutes.put('/:pid', updateProduct);

ProductsRoutes.delete('/:id', deleteProduct);

export default ProductsRoutes;