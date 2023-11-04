import { html } from '../../node_modules/lit-html/lit-html.js';

const loginTemplate =()=> html`<h2>Login page</h2>`;

export function showLogin(ctx){

    ctx.render(loginTemplate());
    
}