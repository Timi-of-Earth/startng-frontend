let name = "Shodiya Oluwatimilehin Samuel";
let courses = ["HTML", "CSS", "Javascript", "and Design"];
console.log("My name is: " + name + "and my courses are " + courses);
const displayedNumbers = [] //Array to contain the numbers to be displayed
function sortEvenOrOdd() {
    if (courses.length !== 0 && courses.length % 2 === 0) {
        for (let i = 0; i <= 200; i += 2)
        displayedNumbers.push(i);
    }
    else if (courses.length !== 0 && courses.length % 2 === 1) {
        for (let i = 1; i <= 200; i += 2)
        displayedNumbers.push(i);
    }
    return displayedNumbers
}
console.log(sortEvenOrOdd);