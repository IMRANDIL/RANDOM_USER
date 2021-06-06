
const fetchUser = async (url) => {
    const user = await fetch(url);
    const jsonTxt = await user.json();

    // destructuring...

    const person = jsonTxt.results[0];

    const { large: image } = person.picture;
    const { phone, email } = person;
    const { dob: { age } } = person;
    const { title, first, last } = person.name;
    const { street: { name, number } } = person.location;
    const { password } = person.login;

    return {
        image, phone, email, age, password, name: `${title} ${first} ${last}`, street: `${name} ${number}`
    }
}


export default fetchUser;