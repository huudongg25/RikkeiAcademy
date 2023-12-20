const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const productController = require('../controllers/product.controller');
const fs = require('fs')
const path = require('path');
const Product = require('../models/product.model');

// router.get('/uploadproduct', async (req, res) => {
//     try {
//         const dbFilePath = path.join(__dirname, '../../libraries/database/product.json');
//         const db = fs.readFileSync(dbFilePath, 'utf-8');
//         const productArr = JSON.parse(db);
//         for (const productData of productArr) {
//             await Product.create({
//                 name: productData.name,
//                 type: productData.type,
//                 image: productData.image,
//                 price: productData.price,
//                 new: productData.new,
//                 quantity_inventory: productData.quantity_inventory,
//                 // Thêm các trường khác tùy ý tại đây
//             });
//         }

//         res.json(JSON.parse(db)); // Chuyển đổi JSON thành đối tượng JavaScript trước khi gửi lại
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Lỗi khi đọc dữ liệu sản phẩm' });
//     }
// });

router.get('/', productController.getProduct);
router.get('/last', productController.getProductLast);
router.get('/:id', productController.getProductById);
router.get('/order-orderDetail/:id', productController.getProductMergerId);
router.post('/create', productController.postProduct);
router.post('/admin-create', upload.single('image'), productController.postProductNotJson);
router.delete('/delete/:id', productController.deleteProductById);
router.patch('/update/:id', productController.updateProductById);
router.patch('/admin-update/:id', upload.single('image'), productController.updateProductNotJson);

module.exports = router;
