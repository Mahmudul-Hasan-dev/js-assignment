//this function will take string input and count the charcter ,the function will return if the character number is even or odd.
function evenOdd(givenString) {
    if (typeof givenString === 'string') {
        let strlength = givenString.length;
        if (strlength % 2 == 0) {
            return 'even';
        }
        else {
            return 'odd';
        }
    }
    return 'error please consider gin=ving string input';
}
// let givenString = 'mines';
// let isevenOdd = evenOdd(givenString);
// console.log(isevenOdd);