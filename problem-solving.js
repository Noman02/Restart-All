// <------------
// feetToInch completed
//             ------------->
function feetToInch(feet) {
    const dadaInch = 12;
    const totalDadaIcnh = feet * dadaInch;
    return totalDadaIcnh;
}
const dadaFeet = feetToInch(5)
// console.log(dadaFeet);

// ---------------------------->
// Centimeter to meter count 

function centimeterToMeter(centimeter) {

}
const result = centimeterToMeter(500);
// console.log(result);

//paper requirments

function paperRequirments(firstBook, secondBook, thirdBook) {
    let firstBookPage = 100;
    let secondBookPage = 200;
    let thirdBookPage = 300;

    const firstBookCopy = firstBookPage * firstBook;
    const secondBookCopy = secondBookPage * secondBook;
    const thirdBookCopy = thirdBookPage * thirdBook;

    const totalPages = firstBookCopy + secondBookCopy + thirdBookCopy;
    // return totalPages;
}

const printBook = paperRequirments(10, 0, 0);
// console.log(printBook);



// find bigest name
const friends = ["roky", "anamul", "noman", "mahir", "mehran mahi", "samir"]

function bestFriend(bigFriend) {
    let bigest = bigFriend[0];
    for (let i = 0; i < bigFriend.length; i++) {
        const index = i;
        const element = bigFriend[index];
        if (element > bigest) {
            bigest = element;
        }

    }
    return bigest;
}
const checkBigest = bestFriend(friends);
console.log(checkBigest);