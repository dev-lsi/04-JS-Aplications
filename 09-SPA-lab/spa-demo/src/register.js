import { checkUserNav } from "./util.js";
import { showHome } from "./home.js";

const section=document.querySelector('#registerView');
const form = section.querySelector('form');
form.addEventListener('submit',onSubmit)
section.remove();

export function showRegister(){
    const main=document.querySelector('main');
    main.replaceChildren(section);
}

async function onSubmit(e){
    e.preventDefault();

    const formData = new FormData(form);

    const email=formData.get('email').trim();
    const password=formData.get('password').trim();
    const repass=formData.get('repass').trim();


    try{
        if(email==''||password==''||repass==''){
            throw new Error('..oops All fields are required!');
        }
        if(password!==repass){
            throw new Error(' ...pff.. password and repass should be equal!')
        }

        const res = await fetch('http://localhost:3030/users/register',{
        method:'post',
        headers:{
            'Content-Type':'aplication/json'
        },
        body:JSON.stringify({email,password})
    });

    if(res.ok==false){
        const error=await res.json();
        throw new Error(error.message);
    }

    const data = await res.json();
    console.log(data);
    const userData = {
        email: data.email,
        accessToken: data.accessToken,
        id: data._id
    }

    sessionStorage.setItem('userData',JSON.stringify(userData));
    checkUserNav();
    showHome();

    }catch(err){
        alert(err.message)
    }
}

