let calculator = function () {

    let addArray = (arr) => {
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) return addArray(arr[i]);
            sum += arr[i];
        }
        return sum;
    };

    let add = function (a, b) {

        if (typeof a === 'function') a = a();
        if (typeof b === 'function') b = b();

        if (Array.isArray(a)) a = addArray(a);
        if (Array.isArray(b)) b = addArray(b);

        if ((typeof a === 'string' && typeof b === 'number') || (typeof a === 'number' && typeof b === 'string'))
            return undefined;
        return a + b;
    };

    return {
        add: add
    }
};

module.exports = calculator;