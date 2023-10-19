

const host = 'http://localhost:3030';


export async function request(method,url,data){

    const userData=JSON.parse(sessionStorage.getItem('userData'));
    const options={
        method,
        headers: {},
    };

    if(data!==undefined){
        options.headers['Content-type']='aplication/json';
        options.body = JSON.stringify(data);
    }

    if(userData!=null){
        options.headers['X-Authorization']=userData.accessToken;
    }

    try {
        const res = await fetch(host+url,options );

        if (res.ok == false) {
            const error = await res.json();
            throw Error(error.message);
        }

        const result = await res.json();

        return result;

    } catch (err) {
        alert(err.message);
        throw err;
    }
}