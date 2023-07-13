const containerDiv = document.getElementById('container')

async function populate() {
    const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
    const request = new Request(requestURL)

    const response = await fetch(request)
    const superHeroes = await response.json()

    populateHeader(superHeroes)
    populateHeroes(superHeroes)
}

function populateHeader(obj) {
    const header = document.querySelector('header')
    const myH1 = document.createElement('h1')
    myH1.textContent = obj.squadName
    header.appendChild(myH1)

    const myPara = document.createElement('p')
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`
    header.appendChild(myPara)
}

function populateHeroes(obj) {
    const section = document.querySelector('section')
    const heroes = obj.members

    for (const hero of heroes) {
        const myArticle = document.createElement('article')
        const myH2 = document.createElement('h2')
        const myPara1 = document.createElement('p')
        const myPara2 = document.createElement('p')
        const myPara3 = document.createElement('p')
        const myList = document.createElement('ul')

        myH2.textContent = hero.name
        myPara1.textContent = `Secret identity: ${hero.secretIdentity}`
        myPara2.textContent = `Age: ${hero.age}`
        myPara3.textContent = `Superpowers:`

        const superPowers = hero.powers 
        for (const power of superPowers) {
            const listItem = document.createElement('li')
            listItem.textContent = power
            myList.appendChild(listItem)
        }

        myArticle.appendChild(myH2)
        myArticle.appendChild(myPara1)
        myArticle.appendChild(myPara2)
        myArticle.appendChild(myPara3)
        myArticle.appendChild(myList)

        section.appendChild(myArticle)
    }
}

populate()



function displayName() {
    const txtElement = document.createElement('p')
    const newestObj = JSON.parse('{"name": "John", "age":30, "birth":"1986-12-14", "city":"New York"}')
    const text = '{"name": "John", "age":30, "birth":"1986-12-14", "city":"New York"}'

    const obj = JSON.parse(text)
    obj.birth = new Date(obj.birth)    

    const nameTxt = `${obj.name}, ${obj.birth}`
    txtElement.textContent = nameTxt

    containerDiv.appendChild(txtElement)

}

displayName()

const reviverFunction = () => {
    
    const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}'
    const obj = JSON.parse(text, function (key, value) { 
    if (key == "birth") {        
        return new Date(value)
    } else {
        return value
    }      
    })
}





const displayAutoManuf = () => {
    const text = '["Ford", "BMW", "Audi", "Fiat"]'
    const myArr = JSON.parse(text)
    for (const arr of myArr) {
        const textItem = document.createElement('p')
        textItem.textContent = arr
        containerDiv.appendChild(textItem)
    }    
}



displayAutoManuf()


function stringifyObj() {
    const obj = {name: "John", age: 30, city: "New York"}
    const myJSON = JSON.stringify(obj)
    console.log(obj)
    console.log(myJSON)
    localStorage.setItem("testObjJSON", myJSON)
}

stringifyObj()

function stringifyArr() {
    const arr = ["John", "Peter", "Sally", "Jane"]
    const myJSON = JSON.stringify(arr)
    console.log(arr)
    console.log(myJSON)
    localStorage.setItem("testArrJSON", myJSON)
}

stringifyArr()

function checkStorageObj() {
    let text = localStorage.getItem("testObjJSON")
    let obj = JSON.parse(text)
    const textElem = document.createElement('p')
    textElem.textContent = `${obj.name} ${obj.age} ${obj.city}`
    containerDiv.appendChild(textElem)
    
}

checkStorageObj()


function checkStorageArr() {
    let text = localStorage.getItem("testArrJSON")
    let arr = JSON.parse(text)
    for (const item of arr) {
        const textElem = document.createElement('p')
        textElem.innerText = item
        containerDiv.appendChild(textElem)
    }
    
}

checkStorageArr()

