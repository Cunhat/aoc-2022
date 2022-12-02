const results = await Deno.readTextFile("input.txt");
const array = results.split("\n")

// //A X Rock, 
// // B Y Paper, 
// // C Z Scissors

type Translated = "X" | "Y" | "Z";

const getValues = {
    "A": 1,
    "B": 2,
    "C": 3,
  };

const translate = {
    X: "A",
    Y: "B",
    Z: "C",
  };

const checkIfIsWinner = (player: string, you: string) => {

    if(player === you) return 3;

    if(player === "A" && you === "C") return 0;
    else if(player === "A" && you === "B") return 6;

    else if(player === "B" && you === "A") return 0;
    else if(player === "B" && you === "C") return 6;

    else if(player === "C" && you === "B") return 0;
    else if(player === "C" && you === "A") return 6;
    else return 0

}

let totalPoints = 0;

array.forEach((element) => {
    const result = element.split(" ");
    const player = result[0];
    const you = translate[result[1] as Translated];

    totalPoints += checkIfIsWinner(player, you) + getValues[you];
});

console.log(totalPoints);

const scores = {
    A: ["A", "C", "B"],//A  Rock, 
    B: ["B", "A", "C"],// B  Paper, 
    C: ["C", "B", "A"] // C Scissors
}

let secondTotalPoints = 0;

array.forEach((element) => {
    const result = element.split(" ");
    const player = result[0];
    const you = result[1];

    let value = you === "X" ? 0 : you === "Y" ? 3 : 6;
    let aux = you === "X" ? 1 : you === "Y" ? 0 : 2;

    let rigged = getValues[scores[player][aux]];
    secondTotalPoints += value + rigged;
});


console.log(secondTotalPoints);
