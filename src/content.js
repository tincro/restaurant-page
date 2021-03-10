import { container } from "webpack";

const bioInfo = function(){
    container = document.getElementById('content');

    headline = document.createElement('h1');
    headline.innerText = "Welcome to Wilson's Diner";
    container.appendChild(headline);
}

export default bioInfo;