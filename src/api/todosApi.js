import axios from 'axios';

let instance = axios.create({
    baseURL : 'https://todoapp-s-e713c-default-rtdb.firebaseio.com' ,
    timeout : 5000
})

export default instance;