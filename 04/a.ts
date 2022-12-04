const results = await Deno.readTextFile("input.txt");
const splittedData = results.split("\n")

let numberOfFullOverlaps = 0;

splittedData.forEach((line) => {
    const array = line.split(",");
    const left = array[0].split("-");
    const right = array[1].split("-");

    if(parseInt(left[0]) <= parseInt(right[0]) && parseInt(left[1]) >= parseInt(right[1])) {
        numberOfFullOverlaps++;
    } else if(parseInt(right[0]) <= parseInt(left[0]) && parseInt(right[1]) >= parseInt(left[1])) {
        numberOfFullOverlaps++;
    }
});

console.log("Part 1: " + numberOfFullOverlaps);

let numberOfOverlaps = 0;

splittedData.forEach((line) => {
    const array = line.split(",");
    const left = array[0].split("-");
    const right = array[1].split("-");

    if(parseInt(left[0]) < parseInt(right[0]) && parseInt(left[1]) < parseInt(right[0])) {
        numberOfOverlaps = numberOfOverlaps + 0;
    } else if(parseInt(right[0]) < parseInt(left[0]) && parseInt(right[1]) < parseInt(left[0])) {
        numberOfOverlaps = numberOfOverlaps + 0;
    } else {
        numberOfOverlaps++;
    }
});

console.log("Part 2: " + numberOfOverlaps);