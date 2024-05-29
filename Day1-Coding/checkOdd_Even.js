const numberCheck = (val) => {
    // if(val % 2 === 0) {
    //     return 'Even'
    // } else {
    //     return 'Odd';
    // }
    return val % 2 === 0 ? 'Even' : 'Odd'
}
console.log(numberCheck(11));
console.log(numberCheck(10));