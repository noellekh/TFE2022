const express = require ("express");
const { validateToken } = require("../middleware/authMiddleware");
const router = express.Router();
const {Products} = require('../models');

router.post("/", async(req, res)=>{
    const {
    product_name,
    product_descri,
    product_price,
    product_stock
    } = req.body

    await Products.create ({
        product_name: product_name,
        product_descri: product_descri,
        product_price: product_price,
        product_stock:product_stock
    });
    res.json ("Produit créer avec succés !")
});

router.get("/", async(req, res)=>{
    const allProducts = await Products.findAll();
    res.json(allProducts);
});

router.delete("/:id_product", async(req, res)=>{
    const id_product = req.params.id_product;
    await Products.destroy({
        where:{
            id_product: id_product
        },
    });

    res.json("Produit supprimé avec succés !")
});

router.put("/product-price", validateToken, async(req, res)=>{
    const {newPrice, id_product} = req.body;
    await Products.update({product_price: newPrice}, {where: {id_product: id_product}})
    res.json(newPrice);
});

router.put("/product-stock", validateToken, async (req, res)=>{
    const {newStock, id_product}= req.body;
    await Products.update({product_price: newStock}, {where:{id_product: id_product}})
    res.json(newStock)
})  ;

module.exports = router;



