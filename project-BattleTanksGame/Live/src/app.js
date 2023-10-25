import page from './lib/page.mjs';
import { addRender } from './middlewares/render.js';
//import {render} from './lib/lit-html.js';
import { homeView } from './views/home.js';


//import page from '../node_modules/page/page.mjs';
//import {render} from '../node_modules/lit-html/lit-html.js'

const main=document.getElementById('main');

page(addRender(main));
page('/index.html','/');
page('/',homeView);

page.start();