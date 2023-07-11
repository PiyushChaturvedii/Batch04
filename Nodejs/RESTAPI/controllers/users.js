import { v4 as uuidv4 } from 'uuid';
let users = [{ "firstname": "Sunita", "lastname": "Sharma", "age": 30, "id": "9ee4591e-316d-4d85-ac9b-9cad38840c0c" }]

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstname} added to the database!`);
}

export const getUsers = (req, res) => {

    res.send(users);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const userDelete = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id: ${id} deleted from the database.`)
}

export const userUpdate = (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (firstname) user.firstname = firstname
    if (lastname) user.lastname = lastname
    if (age) user.age = age

    res.send(`User with the id ${id} has been updated`);
}