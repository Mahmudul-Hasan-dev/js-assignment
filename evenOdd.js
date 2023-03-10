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
let givenString = 'mine';
let isevenOdd = evenOdd(givenString);
console.log(isevenOdd);