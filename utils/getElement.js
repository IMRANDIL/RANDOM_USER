
const  getElement = (selection) => {
    const element = document.querySelector(selection);
    if(element)return element;
    
        throw new Error(`oh no no such elements exist !`)
    
}

export default getElement;