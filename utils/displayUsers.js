import get from './getElement.js';
import removeActive from './removeActive.js';

// const URL = 'https://randomuser.me/api/';
const img = get('.user-img');
const userTitle = get('.user-title');
const userValue = get('.user-value');
const icons = document.querySelectorAll('.icon');






function displayUser(person){
    img.src = person.image;
    userTitle.textContent = `My name is`
    userValue.textContent = person.name;
    removeActive(icons)
    icons[0].classList.add('active');
    icons.forEach((icon)=>{
        const label = icon.dataset.label;
        icon.addEventListener('click', ()=>{
            userTitle.textContent = `My ${label} is`;
            userValue.textContent = person[label]
           removeActive(icons)
            icon.classList.add('active');
        })
    })
    }

    export default displayUser;