

const main = document.querySelector('main');
const nav = document.querySelector('nav');

window.addEventListener('popstate', goTo);
window.addEventListener('click', onNavigate);


const views = {
    '/index.html':() => '<h2>Home Page</h2>',
    '/': () => '<h2>Home Page</h2>',
    '/home': () => '<h2>Home Page</h2>',
    '/catalog': () => '<h2>Catalog Page</h2>',
    '/about': () => '<h2>About Page</h2>'
}




function onNavigate(event) {

    if (event.target.tagName == 'A') {

        event.preventDefault();
        window.history.pushState(null, '', event.target.href);
        goTo();

    }
}

function goTo() {

    const name = window.location.pathname;
    const view = views[name];
    main.innerHTML = view();

}

goTo();



