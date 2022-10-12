// PLAN - Step 1
// write fetch request DONE
// console.log the data from the request DONE
// apply the various APIs to this fetch request DONE
// accessing an array within the JSON DONE
// access the whole array
// investigate the APIs to ID which one looks most fun to use?
// create a concept to work on - eg Pokemon Top Trumps?
// 

// Pokemon API fetch

/*
async function getPokemon() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
    let data = await response.json();
    console.log(data);
    let pokemonName = data.name;
    console.log(pokemonName);
}

getPokemon();

// Trivia API
async function getTrivia() {
    let response = await fetch("https://opentdb.com/api.php?amount=10");
    let data = await response.json();
    console.log(data);
    let triviaQuestion = data.results[2].question;
    console.log(triviaQuestion);
}

getTrivia();

// Dad Joke API


// Dictionary API
async function getDefinition() {
    let response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en_GB/hello");
    let data = await response.json();
    console.log(data);
    let word = data[0].word;
    let wordPhonetics = data[0].phonetics[2].text;
    let wordMeanings = data[0].meanings[0].partOfSpeech;
    console.log(word, wordPhonetics, wordMeanings);
}

getDefinition();
*/

// PLAN STEP 3
// DadJoke Generator - CHOSEN
// create element for button - DONE
// add click event listener to button - DONE
// create text box element - DONE but DISCARDED
// add function - DONE
// function fetches dad joke - DONE
// function takes dad joke - DONE
// function puts dad joke in h2 element - DONE
// box that fills with dad joke - ALTERED to h2 element
// list top 10 dad jokes - DONE
// cap list length to 10 entries - DONE
// option to add to list with new button - DONE
// create ordered list - DONE
// CSS Stylesheet to make all pretty - DONE
// center text - DONE
// add image - DONE
// change text colour - DONE
// center image - DONE
// center buttons - DONE
// EXTRA OPTIONS AFTER MVP:
// if Dad joke is already on list, fetch another 
// check joke against list
// if joke is on list auto call getDadJoke?
// after first 10 entries in list, over-write with new ones

let dadJokeButton = document.createElement("button");
dadJokeButton.innerHTML = "Click for joke!";
dadJokeButton.addEventListener("click", getDadJoke);
document.body.appendChild(dadJokeButton);

let listButton = document.createElement("button");
listButton.innerHTML = "Click to favourite!";
document.body.appendChild(listButton);
listButton.addEventListener("click", addFavourite);

let dadJokeHere = document.querySelector("h2");

async function getDadJoke() {
    let response = await fetch("https://icanhazdadjoke.com/", {
    headers: {accept: "application/json"},});
    let data = await response.json();
    console.log(data);
    let newDadJoke = data.joke;
    console.log(dadJoke);
    dadJokeHere.innerText = newDadJoke
};
    
let dadJoke = getDadJoke()
    
let jokeList = document.createElement("ol");
document.body.appendChild(jokeList);
jokeList.innerText = "Top 10 Favourite Dad Jokes:";

let clickCount = 0;
let clickLimit = 10;

//add else statemet
//else if clickcount higher than click limit
//tell computer to iterate through for loop
//

function addFavourite(){
    clickCount++
    if (clickCount <= clickLimit) {
        let addJokeList = document.createElement("li");       
        document.querySelector("ol").appendChild(addJokeList);
        addJokeList.innerText = dadJokeHere.textContent;
        console.log(dadJokeHere.textContent);
        console.log("joke added");
    }
    };

/*function addFavourite(){
        clickCount++
        console.log(clickCount)
    if (clickCount <= clickLimit) {
        let addJokeList = document.createElement("li");
        document.querySelector("ol").appendChild(addJokeList);

        for (i=0; i<document.querySelectorAll("li").length; i++){
            console.log("loop")
            if (dadJokeHere.textContent === document.querySelectorAll("li")[i].innerText) {
                getDadJoke();
                console.log("the joke was the same")
    } else {
        let addJokeList = document.createElement("li");       
        document.querySelector("ol").appendChild(addJokeList);
        addJokeList.innerText = dadJokeHere.textContent;
        console.log(dadJokeHere.textContent);
        console.log("joke added");
    };
        };
};
};*/