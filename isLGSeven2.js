//this function will take input and deduct 7 from the input .if the deduction result is less than 7 ,it will return the input number and if the deduction result is bigger than 7 ,it will double the input number and return it.
function isLGSeven(number) {
    if (typeof number === 'number') {
        let result = number - 7;
        let output;
        if (result < 7) {
            output = result;
        }
        else {
            output = number * 2;
        }
        return output;
    }
    else {
        return 'please give a number';
    }
}

// let myNumber = -15;
// let result = isLGSeven(myNumber);
// console.log(result);