const caesar = function(str, num) {
    let arr = str.split('');
    let output = [];
    if (num > 0) {
        for (let letter of arr) {
            let origCode = letter.charCodeAt(0);
            let newCode = origCode;
            if ((/[a-z]/).test(letter)) {
                for (let j = 1; j <= num; j++) {
                    newCode++;
                    if (newCode === 123) {
                        newCode = 97;
                    }
                }
                output.push(String.fromCharCode(newCode));
            } else if ((/[A-Z]/).test(letter)) {
                for (let j = 1; j <= num; j++) {
                    newCode++;
                    if (newCode === 91) {
                        newCode = 65;
                    }
                }
                output.push(String.fromCharCode(newCode));
            } else output.push(letter);
        }
        let finalOutput = output.join('');
        return finalOutput;
    } else {
        for (let letter of arr) {
            let origCode = letter.charCodeAt(0);
            let newCode = origCode;
            if ((/[a-z]/).test(letter)) {
                for (let j = -1; j >= num; j--) {
                    newCode--;
                    if (newCode === 96) {
                        newCode = 122;
                    }
                }
                output.push(String.fromCharCode(newCode));
            } else if ((/[A-Z]/).test(letter)) {
                for (let j = -1; j >= num; j--) {
                    newCode--;
                    if (newCode === 64) {
                        newCode = 90;
                    }
                }
                output.push(String.fromCharCode(newCode));
            } else output.push(letter);
        }
        let finalOutput = output.join('');
        return finalOutput;
    }
}

module.exports = caesar
