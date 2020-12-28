const sumAll = function(a, b) {
    console.log(typeof(a));
    if (typeof a !== 'number') {
        return 'ERROR'
    } else if (typeof b !== 'number') {
        return 'ERROR'
    } else if (a < 0 || b < 0) {
        return 'ERROR'
    } else {
        let first = a > b ? b : a;
        let last = a > b ? a : b;
        let output = 0;
        for (let i = first; i <= last ; i++) {
            output += i
        }
        return output
    }
}

module.exports = sumAll
