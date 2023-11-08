import { post } from "./api";

export async function login(email, password){
     const res = await post('/users/login',{email,password});
     console.log(res);
}