import { showHome } from "./home.js";
import { checkUserNav} from './util.js'

export  function logout(e){
     e.preventDefault();
    const userData=JSON.parse(sessionStorage.getItem('userData'));
    
    const data= {
        email:userData.email,
        password:userData.password
    }
    
    fetch('http://localhost:3030/users/logout',{
        method:'get',
        headers:{
            'X-authorization': userData.accessToken
        }
       
    });

    sessionStorage.removeItem('userData');
    checkUserNav();
    showHome();
}