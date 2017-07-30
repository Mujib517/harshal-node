//ODM Object Doc mapper

const mongoose = require('mongoose');

productSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    inStock: Boolean,
    lastUpdated: { type: Date, default: Date.now }
    // comments:[mongoose.Schema.ObjectId]
});

module.exports = mongoose.model('Product', productSchema);