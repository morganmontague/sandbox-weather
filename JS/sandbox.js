function pop() {
let popCreate = document.createElement('div')
mainDiv.appendChild(popCreate)
popCreate.setAttribute('id', 'popArea')
popCreate.setAttribute('class', 'container')
popCreate.innerText = 'new pop'
}
pop()
let poppy = document.getElementById('popArea')
// adding the city section
function test (area, element, text, clas) {
let id = `${area}id` 
let createElement = `${area}div`
createElement = document.createElement(element)
poppy.appendChild(createElement)
createElement.setAttribute('id',id)
createElement.setAttribute('class', clas)
createElement.innerText = `${text}`
}
test('city', 'div')
test('temp', 'div')

let cityDiv = document.createElement('div')
popCreate.appendChild(cityDiv)
cityDiv.setAttribute('id', 'cityContainer')
let cityTitle = document.createElement('div')
cityDiv.appendChild(cityTitle)
cityTitle.setAttribute('id', 'cityTitleHead')
cityTitle.innerText = 'City'
let cityInfo = document.createElement('div')
cityDiv.appendChild(cityInfo)
cityInfo.setAttribute('id', 'cityName')



// let area1 = state.text
// console.log(area1)
// console.log(Object.values(state.text))



// console.log(areaTest)
function tryWhile () {
    let areaTest = Object.values(state.area)
    let elementTest = Object.values(state.element)
    let textTest = Object.values(state.text)
    let clasTest = Object.values(state.clas)
}
  // console.log(areaTest)
  
  
  tryWhile()
  
  // let a = areaTest.forEach(lol => {
  //   console.log(`${lol}`)
  // });
  // let e =elementTest.forEach(lol => {
  //   console.log(`${lol}`)
  // });
  // let t =textTest.forEach(lol => {
  //   console.log(`${lol}`)
  // });
  // let c =clasTest.forEach(lol => {
  //   console.log(`${lol}`)
  // });
  // createElement('a', 'div', 't', 'c')
  
  // need to use object.values() to convert object values to an array so I can then for loop it
    // I also need to make an if else statement to only use poppy at clas = container
    // if else clas is = col use a new parent append need to figure out how to set this.
    // if else clas is row to use a different new parent to set to
  
    

    // more x code
    //creating the pop up

// let popCreate = document.createElement('div')
// mainDiv.appendChild(popCreate)
// popCreate.setAttribute('id', 'popArea')
// popCreate.innerText = 'new pop'

// // adding the city section
// let cityDiv = document.createElement('div')
// popCreate.appendChild(cityDiv)
// cityDiv.setAttribute('id', 'cityContainer')
// let cityTitle = document.createElement('div')
// cityDiv.appendChild(cityTitle)
// cityTitle.setAttribute('id', 'cityTitleHead')
// cityTitle.innerText = 'City'
// let cityInfo = document.createElement('div')
// cityDiv.appendChild(cityInfo)
// cityInfo.setAttribute('id', 'cityName')

// // adding temp
// let tempDiv = document.createElement('div')
// popCreate.appendChild(tempDiv)
// tempDiv.setAttribute('id', 'tempContainer')
// let tempTitle =document.createElement('div')
// tempDiv.appendChild(tempTitle)
// tempTitle.setAttribute('id', 'tempRow1')
// tempTitle.innerText = 'Temperature'
// let tempRow2 = document.createElement('div')
// tempDiv.appendChild(tempRow2)
// tempRow2.setAttribute('id', 'columnHolder')
// let kelvinTemp = document.createElement('div')
// tempRow2.appendChild(kelvinTemp)
// kelvinTemp.setAttribute('id', 'kelvin')
// let celsiusTemp = document.createElement('div')
// tempRow2.appendChild(celsiusTemp)
// celsiusTemp.setAttribute('id', 'celsius')
// celsiusTemp.innerText = 'This will be celsius'
// let fahrenTemp = document.createElement('div')
// tempRow2.appendChild(fahrenTemp)
// fahrenTemp.setAttribute('id', 'fahren')
// fahrenTemp.innerText = 'This will be fahrenheit'



// // adding condition
// let conditionDiv = document.createElement('div')
// popCreate.appendChild(conditionDiv)
// conditionDiv.setAttribute('id', 'conditionContainer')
// let conditionTitle = document.createElement('div')
// conditionDiv.appendChild(conditionTitle)
// conditionTitle.setAttribute('id', 'conditionTitleHead')
// conditionTitle.innerText = 'Condition'
// let conditionInfo = document.createElement('div')
// conditionDiv.appendChild(conditionInfo)
// conditionInfo.setAttribute('id', 'conditionalText')

// // creating image area
// let imageDiv = document.createElement('div')
// popCreate.appendChild(imageDiv)
// imageDiv.setAttribute('id', 'imgContainer')
// let imgTitle = document.createElement('div')
// imageDiv.appendChild(imgTitle)
// imgTitle.setAttribute('id', 'otherTitle')
// imgTitle.innerText = 'Other Information'
// let imgInfo = document.createElement('div')
// imageDiv.appendChild(imgInfo)
// imgInfo.setAttribute('id', 'imgPlace')
// imgInfo.innerText='This will be an image or other info' // need to figure out this part



//test section
// let cityDiv = document.createElement('div')
// popCreate.appendChild(cityDiv)
// cityDiv.setAttribute('id', 'cityContainer')
// let cityTitle = document.createElement('div')
// cityDiv.appendChild(cityTitle)
// cityTitle.setAttribute('id', 'cityTitleHead')
// cityTitle.innerText = 'City'
// let cityInfo = document.createElement('div')
// cityDiv.appendChild(cityInfo)
// cityInfo.setAttribute('id', 'cityName')


// function test (testWord, testWord2) {
//   console.log(`The blind ${testWord} is going to ${testWord2}`)
// }
// test ('dog', 'jump')

// function testElem (element, parent, id) {
//   let newDiv = document.createElement(element)
//   newDiv.setAttribute('id', id)
//   parent.appendChild(newDiv)
// }
// testElem('div', mainDiv, 'test')

// function template (inside) {
// let insidePlace = `${inside}how`
// console.log(insidePlace)
// }
// template('hi')


// // function create2Row (element, parent, id, name){
// //   let nameHolder = `${name}Container`
// //   console.log(nameHolder)
// //   let idHolder = `${id}tag`
// //   console.log(idHolder)
// //   console.log(element)
// //   console.log(parent)
// // }
// // create2Row('div', mainDiv, 'city', 'city')

// function trying (name, element, parent, area){ 
//   let id = `${name}id`
//   name = document.createElement(`${element}`)
//   parent.appendChild(name)
//   name.setAttribute('id', id)
//   name.setAttribute('class', 'container')


//   let innerParent = document.getElementById(id)


//   let innerTemp = document.createElement(element)
//   let tempId = `temp${area}`
//   // innerParent.appendChild(innerTemp)
//   innerTemp.setAttribute('id', tempId)
//   innerTemp.setAttribute('class', 'row')


  
//   // console.log(innerParent)
//   let innerTitle = document.createElement(element)
//   let titleId = `title${area}`
//   innerParent.appendChild(innerTitle)
//   innerTitle.setAttribute('id', titleId)
//   innerTitle.setAttribute('class', 'row')


//   let innerInfo = document.createElement(element)
//   let infoId = `info${area}`
//   innerParent.appendChild(innerInfo)
//   innerInfo.setAttribute('id', infoId)
//   innerInfo.setAttribute('class', 'row')


// }
// trying('cityContainer', 'div', mainDiv, 'city')
// trying('tempContainer', 'div', mainDiv, 'temp')
// trying('conditionContainer', 'div', mainDiv, 'condition')
// trying('imageContainer', 'div', mainDiv, 'img')


  // adding the city section
