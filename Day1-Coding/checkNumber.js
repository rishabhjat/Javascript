const numberCheck = (val) => {
    let number = Math.sign(val)
    if(number === 1) {
        console.log('Positive Number')
    } else if (number === -1) {
        console.log('Negative Number')
    } else if (number === 0) {
        console.log('Zero Number')
    }
}

console.log(numberCheck(0));