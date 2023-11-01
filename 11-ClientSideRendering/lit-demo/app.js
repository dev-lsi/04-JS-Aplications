import { html, render } from "https://unpkg.com/lit-html/lit-html.js";
import { articleTemplate } from './templates/articleTemplate.js';
import {data} from './data.js';


const main = document.querySelector('main');

export function start() {
 
    const articles = data.map(x => articleTemplate(x));

    render(articles, main);

}

start();



