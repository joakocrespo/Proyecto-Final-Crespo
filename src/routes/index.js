import { Router } from "express";
import UsersRoutes from "./users.router.js"
import ProductsRoutes from "./products.router.js";
import CartsRoutes from "./carts.router.js";
import ViewsRoutes from "./views.router.js";
import OrdersRoutes from './orders.router.js'

const router = Router()

router.use('/api/products', ProductsRoutes)
router.use('/api/users', UsersRoutes)
router.use('/api/carts', CartsRoutes)
router.use('/views', ViewsRoutes)
router.use('/api/orders', OrdersRoutes)

export default router