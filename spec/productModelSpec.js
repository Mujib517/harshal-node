var ProductModel = require('../models/productModel');

describe('Product Model', () => {

    it('should validate id field', () => {

        let model = new ProductModel({
            brand: 'adjfkad',
            model: 'adjfkadj'
        });

        model.validate(function (result) {
            expect(result.errors.id).toBeDefined();
        });
    });

    it('should validate id field', () => {
        let model = new ProductModel({
            brand: 'adjfkad'
        });

        model.validate(function (result) {
            expect(result.errors.model).toBeDefined();
        });
    });

    it('should have inStock false by default', () => {
        let model = new ProductModel({
            brand: 'adjfkad',
            model: 'adjfkadj'
        });


        expect(model.inStock).toBe(false);
    });

     it('should have field value undefined when not supplied', () => {
        let model = new ProductModel({
            brand: 'adjfkad',
            model: 'adjfkadj'
        });


        expect(model.test).toBeUndefined();
    });
});