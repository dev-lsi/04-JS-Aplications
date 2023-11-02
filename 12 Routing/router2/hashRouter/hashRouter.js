
export function createHashRouter(views, main) {

    
    
    window.addEventListener('hashchange', goTo);

    return goTo;

    
    
    function goTo() {

        const viewName = window.location.hash;
        const view = views[viewName];

        if (typeof view == 'function') {

            main.innerHTML = view();
            return;
        }
    }


}