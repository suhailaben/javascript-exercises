const palindromes = function(racecar) {
    let modRacecar = racecar.toLowerCase().replace(/[^A-Za-z]/g, '');
    let limit = modRacecar.length / 2;
    let j = modRacecar.length - 1;
    for (i = 0; i < limit ; i++) {
        if (modRacecar[i] !== modRacecar[j]) {
            console.log(modRacecar[i] + modRacecar[j])
            return false;
        } 
        j--
    } return true;
}

module.exports = palindromes