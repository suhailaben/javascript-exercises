const fibonacci = function(number) {
    if (number < 1) {
        return 'OOPS'
    }
    let array = [];
    for (i = 1; i <= number ; i++) {
        if (i === 1) {
            array = [1]
            continue;
        } else if (i === 2) {
            array = [1, 1];
            continue;
        } else {
            array[array.length] = (array[array.length - 1] + array[array.length - 2])
        }
    }
    return array[array.length - 1]
}

module.exports = fibonacci
