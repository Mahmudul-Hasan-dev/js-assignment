//this function will take input and multiply it by 3,add 10 to multiplied result,the result after adding will be divided by 2 and will deduct 5 from the division result
function mindGame(number) {
    let multiplied = number * 3;
    let added = multiplied + 10;
    let divided = added / 2;
    let deducted = divided - 5;
    return deducted;
}
let result = mindGame(4);
console.log(result);