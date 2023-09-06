import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-e232c-default-rtdb.firebaseio.com/'
});


export default instance;