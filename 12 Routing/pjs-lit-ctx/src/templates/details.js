import { html } from '../../node_modules/lit-html/lit-html.js';
import {getById} from '../data/recipes.js'

const detailsTemplate=(id)=>html`
<h2>Details of ${id}</h2>`;

export async function showDetails(ctx){
    
   const id=ctx.params.productId;
   ctx.render(detailsTemplate(productId));

   const res = await getById(id);
   ctx.render(detailsTemplate(recipe.name));

    
}