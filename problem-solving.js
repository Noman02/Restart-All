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
    return totalPages;
}

const printBook = paperRequirments(10, 0, 0);
console.log(printBook);
