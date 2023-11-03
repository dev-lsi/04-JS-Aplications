import {html, render} from '../node_modules/lit-html/lit-html.js';
export function showCatalog(){

    const main = document.querySelector('main');

    const catalogTemplate = html`<h2>Catalog page</h2>
    <ul class=${'productList'}>
        <li><a href='/catalog/product1'>Product 1</a></li>
        <li><a href='/catalog/product2'>Product 2</a></li>
        <li><a href='/catalog/product3'>Product 3</a></li>
    </ul>`

    render(catalogTemplate,main);
    
}