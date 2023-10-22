//

import { html,render } from "../node_modules/lit-html/lit-html.js";

const main=document.querySelector('main');
const catalogTemplate=()=>html`
<h1>Catalog page</h1>
    <ul>our catalog listed here:
        <li>article:1</li>
        <li>article:2</li>
        <li>article:3</li>
    </ul>`

export function showCatalog(){
      render(catalogTemplate(),main);
}