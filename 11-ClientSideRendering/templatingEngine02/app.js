import { data , nav as links } from './data.js';
import { fillTemplate } from './engine.js';


start();

async function start(){

    const main=document.querySelector('main');
    const nav = document.querySelector('nav ul');

    const articleTemplateAsString = await (await fetch('./templates/article.html')).text();
    main.innerHTML = fillTemplate(articleTemplateAsString,data);

    const navTemplateAsString = await (await fetch('./templates/nav.html')).text();
    nav.innerHTML = fillTemplate(navTemplateAsString,links);
   
}



