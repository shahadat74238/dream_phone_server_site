const mongoose = require('mongoose');

const PhoneSchema = new mongoose.Schema({
  name: {
    type: 'string',
  }
});

const Phone = mongoose.model('phones', PhoneSchema);
module.exports = Phone;
