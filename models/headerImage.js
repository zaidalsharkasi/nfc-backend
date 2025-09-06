const mongoose = require('mongoose');

const HeaderImageSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
});

module.exports = mongoose.model('HeaderImage', HeaderImageSchema);
