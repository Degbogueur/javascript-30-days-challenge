// 1
const successPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});

// 2
const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error!');
    }, 2000);
});

// 3
successPromise
    .then(result => {
        console.log(`Initial result: ${result}`);
        return 'Operation successful!';
    })
    .then(transformedResult => {
        console.log(`Transformed result: ${transformedResult}`);
    });

// 4
errorPromise
    .catch(error => {
        console.log(`The API call failed. Error message: ${error}`);
    })