let mongoose = require('../db');
const Schema = mongoose.Schema;



const orderSchema = new Schema({
  name: {
    type: String,
    required: true

  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true, 
    unique: true
  },
  zipCode: {
    type: Number,
    required: true
  },
  
  orderID: {
    type: String,
    require: true

  },
  TrackOrder:{
    type:String,
    default:'Confirmed'
  }
 
});

module.exports = mongoose.model('order', orderSchema);

