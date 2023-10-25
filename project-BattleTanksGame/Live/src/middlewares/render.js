import { render } from '../lib/lit-html.js'
import { layoutTemplate } from '../views/layout.js';


export function addRender(main) {
    
    return (ctx, next) => {

        ctx.render = renderMain;
        next();
    };

    function renderMain(templateResult) {
        render(layoutTemplate(templateResult), main);
    };
}