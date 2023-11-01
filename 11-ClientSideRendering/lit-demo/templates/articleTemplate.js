import {html, } from "../node_modules/lit-html/lit-html.js";
import {classMap} from '../node_modules/lit-html/directives/class-map.js';



export const articleTemplate = (x) => html`<article>
    <h2 class = ${x['def'] ? 'daytip':null}>${x['title']}</h2>
    <div class="content">
        <p>
            ${x['content']}
        </p>
    </div>
    <button @click=${onDelete()}>Delete Article</button>
    <footer ><span style="color:red;font-style: italic;">${x['author']}</span> </footer>
</article>`

function onDelete(){

}

