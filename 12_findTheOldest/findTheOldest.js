const findTheOldest = function(array) {
   ageSortedArr = array.sort((a, b) => {
        if(a.yearOfDeath == undefined) a['yearOfDeath'] = 2022;
        if(b.yearOfDeath == undefined) b['yearOfDeath'] = 2022;
        const firstAge = a.yearOfDeath - a.yearOfBirth;
        const secondAge = b.yearOfDeath - b.yearOfBirth;
        return firstAge > secondAge ? -1:1;
   });
   return ageSortedArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
