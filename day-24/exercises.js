// 1
async function greet() {
    return 'Hello, async!';
}
const result = await greet();
console.log(result);

// 2
async function processData() {
    const result = await Promise.resolve('Resolved!');
    console.log(result);
    return result;
}
await processData();

// 3
async function login(userName) {
    try {
        if (!userName || userName.length < 3) {
            throw new Error(`Invalid username: ${userName}`);
        }
        console.log(`${userName} is connected!`);   
    } catch (error) {
        console.log(`Login failed: ${error.message}`);
        throw error;
    }
}
await login('johndoe');

// 4
async function fetchData() {
    try {
        console.log('Loading user data...');

        const userData = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = {
                    id: 1,
                    name: 'John Doe',
                    email: 'john.doe@mail.com'
                };
                resolve(user);
            }, 2000);
        })
        console.log('User data loaded!', userData);
        return userData;
    } catch (error) {
        console.log(`Error while fetching user data. Error message: ${error}`);
        throw error;
    }
}
await fetchData();