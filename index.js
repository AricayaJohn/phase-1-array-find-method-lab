// code your solution here

const record = [
    {year : "2015", result: "W"},
    {year : "2014", result: "N/A"},
    {year : "2013", result: "L"}
]

const superbowlWin = (yearWin) => {
    const yearWon = yearWin.find(yearWin => yearWin.result === "W");
    return yearWon ? yearWon.year : undefined;
}

console.log(superbowlWin(yearWin));