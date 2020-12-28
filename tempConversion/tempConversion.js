const ftoc = function(fdegrees) {
    let result = parseFloat(((fdegrees - 32) * 5 / 9).toFixed(1));
    return result;
}

const ctof = function(cdegrees) {
    let result = parseFloat((cdegrees * 9 / 5 + 32).toFixed(1));
    return result;
}

module.exports = {
  ftoc,
  ctof
}
