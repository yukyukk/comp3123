// COMP 3132 Lab 2 Exercise 2
// Daniel Lee 100517557
let myWords = ["dan", "boots", 4, "life"];
let myWords2 = ["dan", "boots", "life"];

function makeUpperCase(yourArray) {
    let newArray = [];

    const promiseLol = new Promise((resolve, reject) => {
        for (let word of yourArray) {
            if (typeof word != "string") {
                reject("Error: Not all items in the array are strings!");
            }
        }
        resolve();
    })
    promiseLol.then(() => {
        for (let word of yourArray) {
            newArray.push(word.toUpperCase());
        }
        return newArray;
    }).then(wordArray => console.log(wordArray.sort()));

    promiseLol.catch(message => console.log(message));
}
makeUpperCase(myWords);
makeUpperCase(myWords2);
