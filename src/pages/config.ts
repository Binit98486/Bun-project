// axios-config.js

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos/', // Replace with your API base URL
    timeout: 5000, // Set a timeout for requests (in milliseconds)
});

// Add any default headers here, if needed
// instance.defaults.headers.common['Authorization'] = 'Bearer YourAccessToken';

export default instance;
