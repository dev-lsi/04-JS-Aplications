import { html } from '../../node_modules/lit-html/lit-html.js';

const detailsTemplate=(productId)=>html`
<h2>Details of ${productId}</h2>`;

export function showDetails(ctx){
    
   const productId=ctx.params.productId;
   ctx.render(detailsTemplate(productId));
    
}