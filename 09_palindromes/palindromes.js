const palindromes = function (string) {
    cleanString = string.replace(/\W/g, '').toLowerCase();
    let strRev = cleanString.split('').reverse().join('');
    if(strRev === cleanString) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
