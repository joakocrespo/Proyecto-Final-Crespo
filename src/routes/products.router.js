import { Router } from "express";
import ProductDaoMongo from "../manager/mongo/productsDaoMongo.js"

const ProductsRoutes = Router();
const ProductService = new ProductDaoMongo();

ProductsRoutes.get('/', async (req, res) => {
    try {
        const result = await ProductService.getProducts()
        res.status(200).send({
            status: 'succes',
            payload: result
        })
    } catch (error) {
        console.log(error);
    }
})

ProductsRoutes.get('/:pid', async (req, res) => {
    try {
        let { pid } = req.params;
        const result = await ProductService.getProduct({_id: pid})
        if (!result) {
            return res.status(400).send({
                status: "error",
                error: 'No se encontro el producto'
            });
        }
        res.status(200).send({
            status: 'succes',
            payload: result
        })
    } catch (error) {
        console.log(error);
    }
})

ProductsRoutes.post('/', async (req, res)=>{
    try {
        const {newProd} = req.body;
        const result = await ProductService.createProduct(newProd)
        res.status(200).send({
            status: 'succes',
            payload: result
        })
    } catch (error) {
        console.log(error);
    }
});

ProductsRoutes.put('/:pid', async (req, res)=>{
    const {pid} = req.params;
    const updateProd = req.body;
    const result = await ProductService.updateProduct({_id: pid}, updateProd)
    res.status(200).send({
        status: 'succes',
        payload: result
    })
});

ProductsRoutes.delete('/:id', async (req, res) =>{
    
});

export default ProductsRoutes;