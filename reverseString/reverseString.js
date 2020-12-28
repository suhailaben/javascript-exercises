const reverseString = function(yodel) {

    let generator = [];

    for (let i = 1; i <= yodel.length ; i++) {
        generator.push(yodel[yodel.length - i])
    }

    return generator.join('');
    
}

module.exports = reverseString
