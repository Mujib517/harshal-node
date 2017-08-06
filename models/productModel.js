//ODM Object Doc mapper

const mongoose = require('mongoose');

productSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    inStock: { type: Boolean, default: false },
    lastUpdated: { type: Date, default: Date.now },
    test: { type: String }
    // comments:[mongoose.Schema.ObjectId]
});

module.exports = mongoose.model('Product', productSchema);
