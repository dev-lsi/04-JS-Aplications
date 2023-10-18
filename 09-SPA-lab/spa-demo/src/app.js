
import {showHome} from "./home.js";
import { showCatalog } from "./catalog.js";
import { showAbout } from "./about.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
import { logout } from "./logout.js";
import { checkUserNav } from "./util.js";

checkUserNav();
showHome();

const nav = document.querySelector('nav');
nav.addEventListener('click', onNavigate);
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click',logout);

const sections={
    'homeBtn': showHome,
    'catalogBtn': showCatalog,
    'aboutBtn': showAbout,
    'loginBtn': showLogin,
    'registerBtn': showRegister,
    //'logoutBtn': logout
}

function onNavigate(e) {
   
    if (e.target.tagName == 'A') {
        
        const currBtnId = e.target.id;
        const view = sections[currBtnId];

        if(typeof view == 'function'){
            e.preventDefault();
            view();
        }
        
    }
}









