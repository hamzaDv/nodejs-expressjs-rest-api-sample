
import {v4 as uuidv4} from "uuid";


let users     = [];


export const getUsers = (req, res) => {
    res.send(users);
};

export const createUser =   (req, res) => {
    const userId    = uuidv4();

    const user      = req.body;

    const newUser   = {...user, id: userId};

    users.push(newUser);

    res.send(`User ${newUser.firstName} has been created successfully!`);
};

export const getUser = (req, res) => {
    const { id }    = req.params;
    const foundUser  =   users.find((user) => user.id == id);
    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const { id }    = req.params;
    users  =   users.filter((user) => user.id !== id);
    res.send(`User ${id} has been successfully deleted from the database!`);
};

export const updateUser = (req, res) => {
    const { id }    = req.params;
    const { firstName, lastName, age} = req.body;
    const user  =   users.find((user) => user.id === id);

    if(firstName) user.firstName    =   firstName;
    if(lastName) user.lastName    =   lastName;
    if(age) user.age    =   age;

    res.send(`User ${id} has been successfully updated from the database!`);
};
