import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Homepage.')
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));






// GET:     '/users'        finds all users
// POST:    '/users'        creates a user
// GET:     '/users/:id'    finds user details
// DELETE:  '/users/:id'    deletes a user
// PATCH:   '/users/:id'    updates a user