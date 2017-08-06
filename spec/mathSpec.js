var calculator = require('../math')();

describe("Calculator", () => {

    beforeEach(() => {
        console.log('beforeach');
        //setup
    });

    describe('add()', () => {
        it('should add two numbers and return result', () => {
            var result = calculator.add(2, 3);
            expect(result).toBe(5);
        });

        it('should add two strings and return result', () => {
            var result = calculator.add('Shawn', 'Garner');
            expect(result).toBe('ShawnGarner');
        });

        it('should return undefined when one parameter is string another one is number', () => {
            var result = calculator.add('Shawn', 10);
            expect(result).toBeUndefined();
        });

        it('should invoke the function parameters and return result', () => {

            function first() { return 10; }

            function second() { return 20; }

            var result = calculator.add(first, second);
            expect(result).toBe(30);
        });

        it('should invoke the function parameters and return result', () => {

            function first() { return 10; }

            var result = calculator.add(first, 10);
            expect(result).toBe(20);
        });

        it('should invoke the function parameters and return result', () => {

            function second() { return 20; }

            var result = calculator.add(0, second);
            expect(result).toBe(20);
        });

        it('should invoke the function parameters and return undefined if any of the function returns string', () => {

            function first() { return "Mujib"; }
            function second() { return 20; }

            var result = calculator.add(first, second);
            expect(result).toBeUndefined();
        });

        it('should invoke the function parameters and return undefined if any of the function returns string', () => {

            function first() { return 10; }
            function second() { return "Mujib"; }

            var result = calculator.add(first, second);
            expect(result).toBeUndefined();
        });

        it('should add two arrays', () => {

            function first() { return [1, 2, 3]; }
            function second() { return 20; }

            var result = calculator.add(first, second);
            expect(result).toBe(26);
        });
    });

    describe('sub()', () => {

    });

    afterEach(() => {
        //cleanup
        console.log('after each');
    });

    //  it('should add array of arrays', () => {

    //     function first() { return [1, 2, 3,[1,2,3]]; }
    //     function second() { return 20; }

    //     var result = calculator.add(first, second);
    //     expect(result).toBe(32);
    // });
});