const randomNumber = (min, max) => {
    let number = Math.random(min, max) * max;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random(min, max) * max);
}
console.log(randomNumber(0, 20));