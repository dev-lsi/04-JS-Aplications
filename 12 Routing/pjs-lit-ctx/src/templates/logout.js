import { html } from '../../node_modules/lit-html/lit-html.js';

const logoutTemplate =()=> html`<h2>Logout page</h2>`;

export function onLogout(ctx){

    ctx.render(logoutTemplate());
    
}