import {html, render} from '../node_modules/lit-html/lit-html.js';


export function showHome(){
    const main = document.querySelector('main');

    const homeTemplate = html`<h2>Home page</h2>`;
    render(homeTemplate,main);
    
}