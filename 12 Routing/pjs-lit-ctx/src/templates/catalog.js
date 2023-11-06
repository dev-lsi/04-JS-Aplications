import { html } from '../../node_modules/lit-html/lit-html.js';
import { repeat } from '../../node_modules/lit-html/directives/repeat.js';

import { getAllrecipies } from '../data/recipes.js';

const catalogTemplate = (recipes) => html`
    <h2>Catalog page</h2>
    <ul class=${'productList'}>
       ${repeat(recipes, (rec) => {return rec._id} , recipeCard)}
    </ul>`

    const recipeCard=(recipe)=>html`
     <li><a>${recipe.name}</a></li>
    `;

export async  function showCatalog(ctx) {

    ctx.render('loading.....');
    
    const recipes = await getAllrecipies();
    ctx.render(catalogTemplate(recipes));

}