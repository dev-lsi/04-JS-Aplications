import page from './node_modules/page/page.mjs'
import { showAbout } from './views/showAbout.js';
import { showCatalog } from './views/showCatalog.js';
import { showHome } from './views/showHome.js';

const main = document.querySelector('main');


page('/', showHome);
page('pageJSRouter/catalog', showCatalog);
page('pageJSRouter/about', showAbout);

page.start();