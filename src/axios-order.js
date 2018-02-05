import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://react-burger-app-73206.firebaseio.com/'
})


export default instance;