function divisibleByThreeOrFive (num){
    sum = 0;
    for (let i = 0; i < num; i++){
        if (i % 3 === 0 || i %5 === 0){
            sum += i;
        }
    }
    return sum;
}

console.log(divisibleByThreeOrFive(10))
console.log(divisibleByThreeOrFive(11));

module.exports = divisibleByThreeOrFive;