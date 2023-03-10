//this function will take three parameters as gems of three friend and convert it to diamond number.after converting it will calculate total ,if the total is more than 2000 the function will deduct 2000 from the total and return it on the other hand if the total is less than 2000 ,then total will return as output
function gemsToDiamond(first, second, third) {
    if (typeof first === 'number' && typeof second == 'number' && typeof third == 'number') {
        let firstDiamond = first * 21;
        let secondDiamond = second * 32;
        let thirdDiamond = third * 43;
        let total = firstDiamond + secondDiamond + thirdDiamond;
        let result;
        if (total >= (1000 * 2)) {
            let excess = total - 2000;
            // console.log('excess');
            result = excess;
        }
        else {
            result = total;
        }
        return result;
    }
    else {
        return 'please insert number input'
    }

}
let firstGems = 20;
let secondGems = 40;
let thirdGems = 10;
let total = gemsToDiamond(firstGems, secondGems, thirdGems);
console.log(total);

//////////////////////////////////////////////////////////////