const ctrl = require('../controllers/testCtrl');


describe("TestController", () => {

    let req, res, TestCtrl, product;

    beforeEach(() => {
        product = {
            find: jasmine.createSpy(),
            findById: jasmine.createSpy()
        };

        TestCtrl = ctrl(product); //dependency injection
    })

    describe("Count", () => {

        beforeEach(() => {

            req = {
                body: {}
            };
            res = {
                status: jasmine.createSpy(),
                send: jasmine.createSpy()
            };

            TestCtrl.count(req, res);
        });

        it('should return count as response', () => {
            expect(res.send).toHaveBeenCalled();
        });

        it('should return count as response', () => {
            expect(res.status).toHaveBeenCalledWith(200);
        });

        it('should return status code 500 when user doesnt pass data in body', () => {
            TestCtrl.count({}, res);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).toHaveBeenCalledWith("Internal Server Error");
        });
    });

    describe("Get", () => {

        beforeEach(() => {
            TestCtrl.get({}, {});
        });

        it('should call find function on the mongoose model', () => {
            expect(product.find).toHaveBeenCalled();
        });

        it('should call findById function on the mongoose model', () => {
            TestCtrl.getById({ params: { id: 10 } }, {});
            expect(product.findById).toHaveBeenCalledWith(10,jasmine.any(Function));
        });
    });
});