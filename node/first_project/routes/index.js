var express = require('express');
var router = express.Router();

const postModel = require('../model/post.js');

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const post =  new postModel({
    title: title,
    content: content,
  });
  try{
    const result = await post.save();
    res.status(200).json({
      message: "upload success!!",
      data: result,
    });
  }catch(error){
    res.status(500).json({
      message: error,
    })
  }

});

module.exports = router;
