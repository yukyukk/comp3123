// COMP 3132 Lab 2 Exercise 1
// Daniel Lee 100517557

function compareNumToTen(number) {

    const pro1 = new Promise((resolve, reject) => {
        if (number > 10) {
            resolve(number + " is greater than 10, success!");
        }
        else {
            reject(number + " is less than 10, error!");
        }
    })
    pro1.then((message) => console.log(message));
    pro1.catch((message) => console.log(message));
}

compareNumToTen(15);
compareNumToTen(8);