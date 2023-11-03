
import page from '/node_modules/page/page.mjs'

import{showHome} from './templates/home.js';
import{showCatalog} from './templates/catalog.js';
import{showAbout} from './templates/about.js';
import{showRegister} from './templates/register.js';
import{showLogin} from './templates/login.js';
import{onLogout} from './templates/logout.js';
import{notFound} from './templates/notFound.js';



page('/index.html',showHome);
page('/catalog',showCatalog);
page('/catalog/:id',showCatalog);
page('/about',showAbout);
page('/register',showRegister);
page('/login',showLogin);
page('/logOut',onLogout);
page('/*',notFound)

page.start();


