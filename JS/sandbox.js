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