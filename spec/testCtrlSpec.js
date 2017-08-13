const ctrl = require('../controllers/testCtrl');
const q = require('q');

describe("TestController", () => {

    let req, res, TestCtrl, product;

    beforeEach(() => {
        function fakeResponse(err, products) {
            products = [{ id: 1, brand: 'adjfkaj' }];
            return [{ id: 1, brand: 'adjfkaj' }];
        }
        product = {
            find: jasmine.createSpy().andCallFake(fakeResponse), //stub
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
            res = {
                send: jasmine.createSpy(),
                json: jasmine.createSpy(),
                status: jasmine.createSpy()
            }
            TestCtrl.get(req, res);
        });

        it('should call res.send function', function () {
            expect(res.status).toHaveBeenCalledWith();
            //expect(res.json).toHaveBeenCalled();

        });

        it('should call find function on the mongoose model', () => {
            expect(product.find).toHaveBeenCalled();
        });

        it('should call findById function on the mongoose model', () => {
            TestCtrl.getById({ params: { id: 10 } }, {});
            expect(product.findById).toHaveBeenCalledWith(10, jasmine.any(Function));
        });
    });

    iit('should return a promise', () => {
        let deferred = q.defer();

        req = {};
        res = {
            json: jasmine.createSpy(),
            send: jasmine.createSpy(),
        };

        product = {
            find: jasmine.createSpy().andReturn({
                function() {
                    return deferred.promise;
                }
            })
        };

        TestCtrl = ctrl(product); 

        TestCtrl.get(req, res);

        var prods = [{ id: 1, name: 'apple' }];

        deferred.resolve(prods);

        expect(res.json).toHaveBeenCalled();
    });
});