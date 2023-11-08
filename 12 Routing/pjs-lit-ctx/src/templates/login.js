import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/users.js';

const loginTemplate =() => html`<h2>Login</h2>
`;


export function showLogin(ctx){

    ctx.render(loginTemplate());

    
    
    // async function onSubmit(event){
    //     event.preventDefault();
    //     const formData=new FormData(event.target);

    //     const email=formData.get('email');
    //     const password=formData.get('password');
        
    //     await login(email,password);
    //     ctx.page.redirect('/');

    // }
}