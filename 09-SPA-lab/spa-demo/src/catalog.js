const section=document.getElementById('catalogView');
const list = document.querySelector('ul');
section.remove();

export async function showCatalog() {

    document.querySelector('main').replaceChildren(section);
    list.replaceChildren("Loading.....");

    const res = await fetch('http://localhost:3030/data/movies');
    const data = await res.json();
    
    const fragment=document.createDocumentFragment();
    data.forEach(m => {
        const newLi = createMovieItem(m);
        fragment.appendChild(newLi);

    });
    list.replaceChildren(fragment);

    //list.replaceChildren(...data.map(createMovieItem));

    

}

function createMovieItem(movie) {
    const li = document.createElement('li');
    li.textContent = movie.title;
    return li;
}