const user = { 
    name: 'kolya',
    age: "23"
};

module.exports = {
    user: user,
    sayHello() {
        console.log(`Hello ${user.name}`);
    }
};