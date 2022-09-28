console.log('running')

// declaring main div made in index, used to 'house' the rest of the html
let mainDiv = document.getElementById('main');
mainDiv.innerText = 'This is the parent Div'

// creating a div to serve as the header, where the h1 and buttons will go
let divHead = document.createElement('div')
mainDiv.appendChild(divHead)
divHead.setAttribute('id', 'headContainer')
divHead.setAttribute('class', 'container')
let headArea = document.getElementById('headContainer')
headArea.innerText='This will be the header with buttons';

// creating h1
let h1Area = document.createElement('h1');
headArea.appendChild(h1Area);
h1Area.setAttribute('id', 'idTag');
h1Area.setAttribute('class', 'h1');
h1Area.innerText = 'Weather App';

// creating the label
let inputLabel = document.createElement('label')
headArea.appendChild(inputLabel);
inputLabel.setAttribute('for', 'zipCode');
inputLabel.setAttribute('id', 'zipLabel');
inputLabel.innerText='Enter Zip Code';

// creating the input area for the zip code
// try and add restrictions so it has to be a valid zip
let inputNumber = document.createElement('input')
headArea.appendChild(inputNumber)
inputNumber.setAttribute('id', 'zipCode')
inputNumber.setAttribute('type', 'number')
inputNumber.setAttribute('name', 'zipCode')

// creating the submit input
let inputSubmit = document.createElement('input')
headArea.appendChild(inputSubmit)
inputSubmit.setAttribute('type', 'submit')
inputSubmit.setAttribute('id', 'zipCodeButtonSubmit')

let firstButton = document.getElementById('zipCodeButtonSubmit')

// async function apiInfo(url) {
//     try {
//       const response = await axios.get(url);
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }



//creating the pop up

let popCreate = document.createElement('div')
mainDiv.appendChild(popCreate)
popCreate.setAttribute('id', 'popArea')
popCreate.innerText = 'new pop'

// adding the city section
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

// adding temp
let tempDiv = document.createElement('div')
popCreate.appendChild(tempDiv)
tempDiv.setAttribute('id', 'tempContainer')
let tempTitle =document.createElement('div')
tempDiv.appendChild(tempTitle)
tempTitle.setAttribute('id', 'tempRow1')
tempTitle.innerText = 'Temperature'
let tempRow2 = document.createElement('div')
tempDiv.appendChild(tempRow2)
tempRow2.setAttribute('id', 'columnHolder')
let kelvinTemp = document.createElement('div')
tempRow2.appendChild(kelvinTemp)
kelvinTemp.setAttribute('id', 'kelvin')
let celsiusTemp = document.createElement('div')
tempRow2.appendChild(celsiusTemp)
celsiusTemp.setAttribute('id', 'celsius')
celsiusTemp.innerText = 'This will be celsius'
let fahrenTemp = document.createElement('div')
tempRow2.appendChild(fahrenTemp)
fahrenTemp.setAttribute('id', 'fahren')
fahrenTemp.innerText = 'This will be fahrenheit'



// adding condition
let conditionDiv = document.createElement('div')
popCreate.appendChild(conditionDiv)
conditionDiv.setAttribute('id', 'conditionContainer')
let conditionTitle = document.createElement('div')
conditionDiv.appendChild(conditionTitle)
conditionTitle.setAttribute('id', 'conditionTitleHead')
conditionTitle.innerText = 'Condition'
let conditionInfo = document.createElement('div')
conditionDiv.appendChild(conditionInfo)
conditionInfo.setAttribute('id', 'conditionalText')

// creating image area
let imageDiv = document.createElement('div')
popCreate.appendChild(imageDiv)
imageDiv.setAttribute('id', 'imgContainer')
let imgTitle = document.createElement('div')
imageDiv.appendChild(imgTitle)
imgTitle.setAttribute('id', 'otherTitle')
imgTitle.innerText = 'Other Information'
let imgInfo = document.createElement('div')
imageDiv.appendChild(imgInfo)
imgInfo.setAttribute('id', 'imgPlace')
imgInfo.innerText='This will be an image or other info' // need to figure out this part


let country = 'us'
let zip = document.getElementById('zipCode').value
let key  ='61243455494583beaa9d02e13c7f29e3'

firstButton.addEventListener('click', () => {
  async function zipWeather(url) {
    
    try {
      const response = await axios.get(url);
      console.log(response);
      let k = response.data.main.feels_like
      k = Math.round(k)
      let c = Math.round(k - 273.15)
      let f = Math.round(c*(9/5) + 32)
      conditionInfo.innerText = response.data.weather[0].description
      kelvinTemp.innerText = k + ' K'
      celsiusTemp.innerText = c + ' C'
      fahrenTemp.innerText = f + ' F'
      cityDiv.innerText = response.data.name
      imgInfo.innerText = response.data.weather[0].icon
      
    } catch (error) {
      console.error(error);
    }
  }
  let zip = document.getElementById('zipCode').value

  zipWeather(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${key}`)

})
