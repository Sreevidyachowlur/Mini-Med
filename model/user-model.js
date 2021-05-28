let mongoose = require('../db');
const Schema = mongoose.Schema;
const constant = require('../utils/constant');
// const CONSTANT = require('../utils/constant');

const userSchema = new Schema({
  name: {
    type: String,
    required: true

  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  phone: {
    type: Number,
    required: true, 
    unique: true
  },
  address: {
    type: String,
    default: ''
  },
  
  UserId: {
    type: String,
    require: true

  },
  password: {
    type: String,
    require: true

  },
  userType: {
    type: String,
    enum: constant.USERTYPE,
    required: true
  }
});

module.exports = mongoose.model('users', userSchema);