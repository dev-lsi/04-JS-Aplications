//import {createHashRouter} from './hashRouter/hashRouter.js';
import {createHistoryRouter} from '../historyRouter/historyRouter.js';


    const main = document.querySelector('main');


    const views = {
    '/home': ()=> '<h2>Home Page</h2>',
    '/catalog': ()=>'<h2>Catalog Page</h2>',
    '/about': ()=>'<h2>About Page</h2>'
    }

     
    
    const start = createHistoryRouter(main,views);

    //start app
    start();

    

    

    
    
    
    




