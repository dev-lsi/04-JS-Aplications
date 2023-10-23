import { getUserData } from "../util.js";

const host = "https://parseapi.back4app.com";
const appId = "ViaMvcn63TtrUZ7eMOYUpEPPsShcQiFOKQnWYWgu";
const apiKey = "EhOZUCQX1QRilj3Axovur2JRiFdhZUtt2inG1DVk";

async function request(method, url, data) {

    const options = {
        method,
        headers: {
            "X-Parse-Application-Id": appId,
            "X-Parse-REST-API-Key": apiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    if (url.slice(0, 6) == "/users" || url.slice(0, 6) == "/login") {

        options.headers["X-Parse-Revocable-Session"]=1;
        
    }else{
        url = "/classes" + url
    }

    

    if (data != 'undefined') {
        
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();
    if (userData) {
        options.headers['X-Parse-Session-Token'] = userData.sessionToken;
    }

    try {
        const response = await fetch(host + url, options);

        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (err) {
        alert(err.message);
        throw err;
    }

}

export async function get(url){
    return request('get',url);
};

export async function post(url,data){
    return request('post',url,data);
};

export async function put(url,data){
    return request('put',url,data);
};

export async function del(url){
    return request('delete',url);
};