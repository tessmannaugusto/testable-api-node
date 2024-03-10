import express from 'express';
import productsRouter from './products'
const router = express.Router();

router.use('/products', productsRouter)
router.get('/', (req, res) => res.send('Hello World!'));


export default router;