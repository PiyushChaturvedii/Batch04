import express from 'express';

import { createUser, getUsers, getUser, userDelete, userUpdate } from '../controllers/users.js';

const router = express.Router();



router.get('/',getUsers);

router.post('/',createUser)


router.get('/:id',getUser)

router.delete('/:id', userDelete)


router.patch('/:id', userUpdate)
export default router;