import { html } from '../../node_modules/lit-html/lit-html.js';
import {getById} from '../data/recipes.js'

const detailsTemplate=(res)=>html`
<h2>Details of ${res.name}</h2>`;

export async function showDetails(ctx){
  
   const productId = ctx.params.productId;
   const res = await getById(productId);
   ctx.render(detailsTemplate(res));
}