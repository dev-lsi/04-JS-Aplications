import {html, render} from '../node_modules/lit-html/lit-html.js';


export function showRegister(){
    const main = document.querySelector('main');

    const registerTemplate = html`<h2>Home page</h2>`;
    render(registerTemplate,main);
    
}