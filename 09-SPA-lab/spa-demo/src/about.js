const section =document.querySelector('#aboutView');
section.remove();

export function showAbout(){
    document.querySelector('main').replaceChildren(section);
}