//this function will take an array as input and count the negative value which is defined as bad data.after counting the bad data it will return the number of bad data.
function findingBadData(ages) {
    let numberOfBadData = 0;
    for (i = 0; i < ages.length; i++) {
        let number = ages[i];
        if (number < 0) {
            numberOfBadData = numberOfBadData + 1;
        }
        else {
            numberOfBadData = numberOfBadData;
        }
    }
    return numberOfBadData;
}
let ages = [10, -12, 24, -48, -39, 49]
let result = findingBadData(ages);
console.log(result);