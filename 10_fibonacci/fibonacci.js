const fibonacci = function(num) {
    if(num<0) return "OOPS";
    let num1 = 0, num2 = 1, holder = 0;
    for(let i = 0; i<num-1; i++) {
        holder = num1 + num2;
        num1 = num2;
        num2 = holder;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
