import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import axios from 'axios';
import axios from './axios';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    // console.log(request);
    //Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    // console.log(response);
    //Edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)