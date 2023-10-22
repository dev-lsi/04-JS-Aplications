

import {createHistoryRouter} from "./historyRouter.js"

const views = {
    '/home': () => '<h1>Home page</h1><p>Welcome to our site</p>',
    '/catalog': () => '<h1>Catalog page</h1><ul>our catalog listed here:<li>article:1</li><li>article:2</li><li>article:3</li></ul>',
    '/about': () => '<h1>About page</h1><p>read more about us...text...text....text</P>'
}

const main = document.querySelector('main');

const start = createHistoryRouter(main,views);

//start application
start();

