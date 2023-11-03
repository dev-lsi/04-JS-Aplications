import {html, render} from '../node_modules/lit-html/lit-html.js';


export function showAbout(){
    const main = document.querySelector('main');

    const aboutTemplate =html`<h2>About page</h2>`;
    render(aboutTemplate,main)
    
}