//First Part
const results = await Deno.readTextFile("input.txt");
const splitted = results.split("\n\n");
const array: Array<number>= [];
let biggest = 0;

splitted.forEach((element) => {
    const result = element.split("\n").map((x) => parseInt(x));
    const total = result.reduce((a, b) => a + b, 0);
    array.push(total);

    if (total > biggest) biggest = total;
});
console.log("Part A: ", biggest);

// // Second part

 array.sort((a, b) => (b - a));
 console.log("Part B: ",  array[0] + array[1] + array[2]);


