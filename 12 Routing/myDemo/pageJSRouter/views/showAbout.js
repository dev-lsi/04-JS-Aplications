import { html, render } from "../node_modules/lit-html/lit-html.js";

const main = document.querySelector('main');

const aboutTemplate = () => html`
<h1>About page</h1>
<p>read more about us...text...text....text</P>`;

export function showAbout() {

    render(aboutTemplate(), main);

}