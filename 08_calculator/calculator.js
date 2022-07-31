const add = function(...args) {
  const sum = args.reduce((total, value) => {return total + value
  });
  return sum;
};

const subtract = function(...args) {
	const sum = args.reduce((total, value) => {return total - value
  });
  return sum;
};

const sum = function(args) {
  if(args.length === 0) return 0;
  else {
    const sum = args.reduce((total, value) => {return total + value
    });
    return sum;
  }
};

const multiply = function(args) {
  const sum = args.reduce((total, value) => {return total * value
  });
  return sum;
};

const power = function(num1, power) {
	return num1**power;
};

const factorial = function(num1) {
	if(num1 === 0) return 1;
  return num1 * factorial(num1 - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
