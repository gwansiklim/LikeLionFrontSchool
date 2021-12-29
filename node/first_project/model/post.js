// 게시글 스키마 작성방법!
const mongoose = require('mongoose');
const Schema = mongoose.Schema; // 구조분해할당으로 사용 가능 === const { Schema } = mongoose;


// schema정의 (저장 할 데이터를 정의 해준다.)
const postScheam = new Schema({
  title : String,
  content : String,
  create_date : {
    type: Date, 
    default: new Date(),
  }
});

// 외부파일에서 사용하기 위함.
module.exports = mongoose.model("post", postScheam);