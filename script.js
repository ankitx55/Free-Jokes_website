

const jokes = document.querySelector('#jokes');

const newJoke = async() => {
    const newJokes = await dadJoke()
    const newLI = document.createElement('li');
    newLI.append(newJokes)
    jokes.append(newLI)
}

const dadJoke = async() => {

    try{

        const config = {headers: { Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        console.log(res.data.joke);
        return res.data.joke;
    } catch (e) {
        return "Sorry no jokes available right now";
    }
    

}
button.addEventListener('click',newJoke);