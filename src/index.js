// fetch requests

window.onload = fetchCharacters = () => {
    fetch("http://localhost:3000/characters")
    .then(res => res.json())
    .then(addAllCharactersToCharacterBar)
}

function getSingleCharacter(id) {
    return fetch(`http://localhost:3000/characters/${id}`)
      .then(r => r.json() )
      .then(json => console.log(json))
      
}

// main functions

function addAllCharactersToCharacterBar(characterArray){
    const characterBar = document.querySelector("#character-bar")
    characterBar.innerHTML = ""
      characterArray.forEach(addCharacterSpanToCharacterBar)
}

function addCharacterSpanToCharacterBar(character){
    const characterBar = document.querySelector("#character-bar")
    const characterSpan = document.createElement("span")
    characterSpan.innerText = character.name
    characterSpan.id = character.id
    characterSpan.addEventListener("click", onCharacterSpanClick)
    characterBar.append(characterSpan)
}

function onCharacterSpanClick(e){
    // getSingleCharacter(e.target.id)
    getSingleCharacter(e.target.id).then(character => addCharacterInfoToPage(character))
    console.log(e.target.id)
}

function addCharacterInfoToPage(character){
    console.log("hello")
    const characterInfo = document.querySelector("#detailed-info")
        characterInfo.innerHTML = ""
    const characterImage = document.querySelector("#image")
        characterImage.src = character.image
    const characterName = document.querySelector("#name")
        characterName.innerText = character.name
    const characterCalories = document.querySelector("#calories")
        characterCalories.innerText = character.calories
    characterInfo.append(characterImage, characterName, characterCalories)
}