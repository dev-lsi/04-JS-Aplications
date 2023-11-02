export function createHistoryRouter(main,views){

    return onChange; 

    function onChange(){

        
        const viewName=window.location.pathname;
        
        const view=views[viewName];

        if(typeof view == 'function'){

            main.innerHTML=view();
        }

    }

}
