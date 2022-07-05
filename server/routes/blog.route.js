const express = require ("express");
const router = express.Router();
const {Blog} = require('../models');

router.get("/",async (req, res)=>{
    const allBlog = await Blog.findAll();
    res.json(allBlog);
});

router.post("/", async(req, res)=>{
    const {
        blog_title,
        blog_type,
        blog_content

    }= req.body;
    await Blog.create({
        blog_title:blog_title,
        blog_type: blog_type,
        blog_content:blog_content
    });

    res.json('Article ajouté avrc succés !')
});

router.delete("/:id_blog", async (req, res) => {
    const id_blog = req.params.id_blog;
    await Blog.destroy({
      where: {
        id_blog: id_blog,
      },
    });
  
    res.json("Blog supprimé avec succés !");
  });

module.exports = router;