//Users List
const users = [
    {
        'id': 1,
        'email': 'karim.bichri.ls@gmail.com',
        'password': '123456',
        'username': 'karimbi',
        'admin': true,
        'points': 5
    },
    {
        'id': 2,
        'email': 'yassine.laamach10@gmail.com',
        'password': '514514',
        'username': 'yassinelam',
        'admin': false,
        'points': 2
    },
    {
        'id': 3,
        'email': 'myriam.saintlaurent@gmail.com',
        'password': '123456',
        'username': 'myriamsl',
        'admin': false,
        'points': 3
    },
];

// Method to find user by email
exports.findByEmail = (email) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email === email) {
            return user;
        }
    }
    return null;
}

// method to create user
exports.create = (data) => {
    const user = {
        id: users[users.length - 1].id + 1,
        email: data.email,
        password: data.password,
        username: data.username,
        isAdmin: false
    };
    users.push(user);
}
// method to get all users except where admin is true
exports.showuser = () => {
    const nonAdminUsers = [];
    for (let i = 0; i < users.length; i++) {
        if (!users[i].admin) {
            nonAdminUsers.push(users[i]);
        }
    }
    return nonAdminUsers;
}

// method to update user
exports.updateUser = (id, data) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            user.email = data.email;
            user.password = data.password;
            user.username = data.username;
            return user;
        }
    }
    return null;
}

// method to delete user
exports.deleteUser = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === parseInt(id)) {
            users.splice(i, 1);
            return;
        }
    }
}
// method to increment points
exports.incrementPoints = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            user.points++;
            return user;
        }
    }
    return null;
}

// method to decrement points
exports.decrementPoints = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            user.points--;
            return user;
        }
    }
    return null;
}
// method to show information of user
exports.showme = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            return user;
        }
    }
    return null;
}
// method to update information of specific user
exports.updateMe = (id, data) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            user.email = data.email;
            user.password = data.password;
            user.username = data.username;
            return user;
        }
    }
    return null;
}
// method to delete actual user identifier
exports.deleteMe = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            users.splice(i, 1);
            return;
        }
    }
}

// method to reset score of specific user
exports.resetScore = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            user.points = 0;
            return user;
        }
    }
    return null;
}


// method to check if user exist by id
exports.findById = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            return true;
        }
    }
    return false;
}
