//First Part

const results = await Deno.readTextFile("input.txt");
const splited = results.split("\n\n");


const array = [];
let index = 0;

let biggest = 0;

console.log(splited);

splited.forEach((element) => {
    const result = element.split("\n").map((x) => parseInt(x));
    let total = result.reduce((a, b) => a + b, 0);
    array.push(total);

    if (total > biggest) biggest = total;
});

console.log("Part A: ", biggest);
// // Second part

 array.sort(function(a, b) { return  b - a });


 console.log("Part B: ",  array[0] + array[1] + array[2]);


