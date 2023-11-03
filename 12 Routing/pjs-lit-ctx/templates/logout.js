import {html, render} from '../node_modules/lit-html/lit-html.js';


export function onLogout(){
    const main = document.querySelector('main');

    const logoutTemplate = html`<h2>Home page</h2>`;
    render(logoutTemplate,main);
    
}