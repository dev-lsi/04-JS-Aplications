import {html, render} from '../node_modules/lit-html/lit-html.js';


export function notFound(){

    const main = document.querySelector('main');

    const notFoundTemplate = html`<h2>Home page</h2>`;
    render(notFoundTemplate,main);
    
}