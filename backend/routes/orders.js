const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Get user orders
router.get('/get_orders', async (req, res) => {
  const search = req.query.search;
  const orders = await Order.find({ username: search });
  res.json(orders);
});

module.exports = router;
