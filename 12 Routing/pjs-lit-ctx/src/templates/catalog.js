import { html } from '../../node_modules/lit-html/lit-html.js';
import { repeat } from '../../node_modules/lit-html/directives/repeat.js';

import { getAllrecipies } from '../data/recipes.js';

const catalogTemplate = (recipes) => html`
    <h2>Catalog page ${recipes}</h2>
    <ul >
       ${repeat(recipes,(r => r._id) , recipeCard)}
    </ul>`

    const recipeCard=(recipe)=>html`
     <li><a href="${recipe._id}">${recipe.name}</a></li>`;
     

export async  function showCatalog(ctx) {
    
    const recipes = await getAllrecipies();
    ctx.render(catalogTemplate(recipes));

}