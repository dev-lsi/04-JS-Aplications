import { html } from '../../node_modules/lit-html/lit-html.js';

const registerTemplate = ()=> html`<h2>Register page</h2>`;

export function showRegister(ctx){
    
    ctx.render(registerTemplate());
    
}