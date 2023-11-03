import {html, render} from '../node_modules/lit-html/lit-html.js';


export function showLogin(){
    const main = document.querySelector('main');

    const loginTemplate = html`<h2>Login page</h2>`;
    render(loginTemplate,main);
    
}