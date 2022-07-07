import axios from 'axios';
import {UserType} from '../redux/usersReducer';

export const usersAPI = {
    getUsers() {
        return axios.get<UserType[]>('https://jsonplaceholder.typicode.com/users');
    },
};