const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  oid: String,
  price: Number,
  product_ids: [String],
  quantity: Number,
  username: String,
});

module.exports = mongoose.model('Order', orderSchema);
