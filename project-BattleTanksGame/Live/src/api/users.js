import * as api from './api.js';
import { setUserData } from '../util.js';

export async function login(username,password){

    const result = await api.post('/login',{username,password});
    
    const userData={
        username:result.username,
        sessionToken:result.sessionToken
    }

    setUserData(userData);
    console.log(userData)
    return result;
}