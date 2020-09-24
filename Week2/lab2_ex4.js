// COMP 3132 Lab 2 Exercise 4
// Daniel Lee 100517557


//4a
const delayedPromise = (number => {
    const promise1 = new Promise((resolve) => {
        setTimeout(() =>
            resolve(number * number), 500);
    })
    promise1.then(message => console.log(message));
})


delayedPromise(5);


//4b

async function asyncPromise(number) {
    const promise1 = new Promise((resolve) => {
        setTimeout(() => resolve(number * number), 500)
    });
    let result = await promise1;
    console.log(result);
}

asyncPromise(6);