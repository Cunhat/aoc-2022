const results = await Deno.readTextFile("input.txt");
const splittedData = results.split("\n")

let finalSum = 0;

const getAlphabetValue = (char: string) => {
    if(char === char.toUpperCase()) {
        return (parseInt(char, 36) - 10) + 26;
    } else {
        return parseInt(char, 36) - 10;
    }
}

// Part 1
splittedData.forEach(line => {
    const value = [line.slice(0, line.length / 2), line.slice(line.length / 2)];
    let sameChar =  ""; 

     value[0].split("").forEach((char) => {
        if(value[1].includes(char)) {
            sameChar = char;
        }
    });

    let aux = getAlphabetValue(sameChar);
    finalSum += ++aux;

});

console.log("Part 1: " + finalSum);

//// Part 2
let innerArray: Array<string> = [];
let finalSummB = 0;
let charFromGroups = "";

splittedData.forEach((line, index) => {
    innerArray.push(line);
    if((index+1) % 3 === 0) {
       innerArray[0].split("").forEach((char) => {
            if(innerArray[1].includes(char) && innerArray[2].includes(char)) {
                charFromGroups = char;
            }
        });
        let aux = getAlphabetValue(charFromGroups);
        finalSummB += ++aux;
        innerArray = [];
    } 
});

console.log("Part 2: " + finalSummB)


