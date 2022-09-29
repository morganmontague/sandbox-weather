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
    