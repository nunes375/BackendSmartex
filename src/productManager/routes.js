const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get("/", controller.getProducts);

//router.get("/:id", controller.getProductById);

router.get("/search", controller.getProductByTitleOrCategory);

router.post("/", controller.addProduct);

router.put("/:id", controller.updateProduct);

router.delete("/:id", controller.deleteProduct);

module.exports = router;