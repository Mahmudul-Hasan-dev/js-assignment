//this function will take input and multiply it by 3,add 10 to multiplied result,the result after adding will be divided by 2 and will deduct 5 from the division result
function mindGame(number) {
    let multiplied = number * 3;
    let added = multiplied + 10;
    let divided = added / 2;
    let deducted = divided - 5;
    return deducted;
}
// let result = mindGame(4);
// console.log(result);


//////////////////////////////////////////////////////
//this function will take string input and count the charcter ,the function will return if the character number is even or odd.
function evenOdd(givenString) {
    let strChar = 0;
    let msg;
    for (i = 0; i < givenString.length; i++) {
        // console.log('hello');
        strChar = strChar + 1;
        if (strChar % 2 == 0) {
            msg = 'even';
        }
        else {
            msg = 'odd';
        }
    }
    return msg;
}
// let givenString = 'mine';
// let isevenOdd = evenOdd(givenString);
// console.log(isevenOdd);


/////////////////////////////////////////////////
//this function will take input and deduct 7 from the input .if the deduction result is less than 7 ,it will return the input number and if the deduction result is bigger than 7 ,it will double the input number and return it.
function isLGSeven(number) {
    let result = number - 7;
    let output;
    if (result < 7) {
        output = number;
    }
    else {
        output = number * 2;
    }
    return output;
}

// let myNumber = 15;
// let result = isLGSeven(myNumber);
// console.log(result);


////////////////////////////////////////////////
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
// let ages = [10, -12, 24, -48, -39, 49]
// let result = findingBadData(ages);
// console.log(result);

//////////////////////////////////////////////////////
//this function will take three parameters as gems of three friend and convert it to diamond number.after converting it will calculate total ,if the total is more than 2000 the function will deduct 2000 from the total and return it on the other hand if the total is less than 2000 ,then total will return as output
function gemsToDiamond(first, second, third) {
    let firstDiamond = first * 21;
    let secondDiamond = second * 32;
    let thirdDiamond = third * 43;
    let total = firstDiamond + secondDiamond + thirdDiamond;
    let result;
    if (total >= 2000) {
        let excess = total - 2000;
        // console.log('excess');
        result = excess;
    }
    else {
        result = total;
    }
    return result;

}
// let firstGems = 20;
// let secondGems = 40;
// let thirdGems = 10;
// let total = gemsToDiamond(firstGems, secondGems, thirdGems);
// console.log(total);

//////////////////////////////////////////////////////////////