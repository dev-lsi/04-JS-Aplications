
import page from '../node_modules/page/page.mjs';
import { render as litRender } from '../node_modules/lit-html/lit-html.js';

import { showHome } from './templates/home.js';
import { showCatalog } from './templates/catalog.js';
import { showAbout } from './templates/about.js';
import { showRegister } from './templates/register.js';
import { showLogin } from './templates/login.js';
import { onLogout } from './templates/logout.js';
import { notFound } from './templates/notFound.js';
import { showDetails} from './templates/details.js'

import * as api from './data/recipes.js';

window.api=api;

const main = document.querySelector('main');

page(decorateContext);

page('index.html','/');
page('/',showHome);
page('/catalog',showCatalog);
page('/catalog/:productId',showDetails);
page('/about',showAbout);
page('/register',showRegister);
page('/login',showLogin);
page('/logOut',onLogout);
page('*',notFound);

page.start();

function decorateContext(ctx,next){
   ctx.render=render;
   next();
}

function render(template) {

    litRender(template, main);

}

// function showDetails(event){
//   console.log(event.params.productId);
// }


