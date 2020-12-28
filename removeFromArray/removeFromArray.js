const removeFromArray = function() {
    let output = [];
    for (let i = 0; i < arguments[0].length ; i++) {
        output.push(arguments[0][i])
        for (let x = 1; x < arguments.length; x++) {
            if (typeof(arguments[x]) === Number || String ) {
                if (arguments[0][i] === arguments[x]) {
                    output.pop();
                    break
                }
            }  else {

                for (let y = 0; y < arguments[x].length; y++) {
                    if (arguments[0][i] === arguments[x][y]) {
                        output.pop();
                        break
                    } else continue
                }
            }
        }
    } 
    return output
 }

module.exports = removeFromArray
