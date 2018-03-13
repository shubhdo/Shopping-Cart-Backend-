const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


const Product = new Schema({
  name:String,
  price:Number,
  icon:{
    type:String,
    default:"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_1.0/assets/images/banners/2017/12/7/11512647055077-best-winterwear-DK-strip.jpg",
  },
  colors:
  {
    type:[String],
    default:["blue" , "green" , "gray"],
  },
  discount:Number,
  description:String
});



module.exports = mongoose.model('Product', Product, 'Product');