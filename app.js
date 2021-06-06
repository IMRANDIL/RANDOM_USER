import get from './utils/getElement.js';
import fetching from './utils/fetchUser.js';
import displayUser from './utils/displayUsers.js';


const URL = 'https://randomuser.me/api/';



const btn = get('.btn');







async function getUser() {
    const fetch = await fetching(URL);
     displayUser(fetch);
}







window.addEventListener('DOMContentLoaded', getUser);

btn.addEventListener('click', getUser);