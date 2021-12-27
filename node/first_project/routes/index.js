var express = require('express');
var router = express.Router();
const loginCheck = require('../module/loginCheck');
const upload = require('../module/imageUpload');

let arr = [];

/* GET home page. */
router.get('/read', function(req, res) {
  res.status(200).json ({
    message: "read success",
  });
});

/* POST */
router.post("/create", (req, res) => {
  const {data} = req.body;
  arr.push(data);
  res.status(200).json({
    message: "create success",
    result: arr,
  })
})

/* PUT */
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { data } =req.body;
  arr[id] = data;
  res.status(200).json({
    message: "update success",
    result: arr,
  })
})

/* DELETE */
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  arr.splice(id, 1);
  res.status(200).json({
    message: "delete success",
    result: arr
  })
})

/* middleware사용법 */
router.get("/", loginCheck, (req, res) => {
  res.status(200).json({
    message: "login success!!",

  })
})

/* multer 사용법 */
router.post('/upload', upload.single("image"), (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200).json({
    message: "upload success!!"
  })
})

module.exports = router;
