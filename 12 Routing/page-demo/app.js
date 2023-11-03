
import page from './node_modules/page/page.mjs';
import {render as litRender} from './node_modules/lit-html/lit-html.js'
import { showAbout } from './views/about.js';
import { showHome } from './views/home.js';
import { showCatalog} from './views/catalog.js';



    const main = document.querySelector('main');

    page('index.html','/');
    page('/',()=>showHome(render));
    page('/catalog',()=>showCatalog(render));
    page('/catalog/:id', showDetails);
    page('/about',()=>showAbout(render));

    page.start();

    function render(templateRes){

        litRender(templateRes,main)

    }

    function showDetails(){
        console.log('showing details', Date.now());
    }

     
    
    

    

    

    

    
    
    
    




