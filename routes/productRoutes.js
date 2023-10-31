const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Routes for products

router.get('/products', productController.getAllProducts); // Get all products
router.get('/products/:id', productController.getProductById); // Get a product by ID
router.post('/products', productController.addProduct); // Add a product
router.put('/products/:id', productController.updateProductById); // Update a product by ID
router.delete('/products/:id', productController.removeProductById); // Delete a product by ID
router.delete('/products', productController.removeAllProducts); // Delete all products
router.get('/products/search', productController.findProductsByName); // Search for products by name

module.exports = router;