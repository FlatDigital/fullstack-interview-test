import axios from 'axios'

const Apis = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
    headers: {
        "Content-type": "application/json"
    }
});

export {
    Apis
}
