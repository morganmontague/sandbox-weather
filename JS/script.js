console.log('running')
let mainDiv = document.getElementById('main');
mainDiv.innerText = 'This is the parent Div'

let divHead = document.createElement('div')
mainDiv.appendChild(divHead)
divHead.setAttribute('id', 'headContainer')
divHead.setAttribute('class', 'container')
let headArea = document.getElementById('headContainer')
headArea.innerText='This will be the header with buttons';

let h1Area = document.createElement('h1');
headArea.appendChild(h1Area);
h1Area.setAttribute('id', 'idTag');
h1Area.setAttribute('class', 'h1');
h1Area.innerText = 'Weather App';

let inputLabel = document.createElement('label')
headArea.appendChild(inputLabel);
inputLabel.setAttribute('for', 'zipCode');
inputLabel.setAttribute('id', 'zipLabel');
inputLabel.innerText='Enter Zip Code';

let inputNumber = document.createElement('input')
headArea.appendChild(inputNumber)
inputNumber.setAttribute('id', 'zipCode')
inputNumber.setAttribute('type', 'number')
inputNumber.setAttribute('name', 'zipCode')

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
cityDiv.setAttribute('id', 'cityName')

// adding temp
let tempDiv = document.createElement('div')
popCreate.appendChild(tempDiv)
tempDiv.setAttribute('id', 'kelvinTemp')

// adding condition
let conditionDiv = document.createElement('div')
popCreate.appendChild(conditionDiv)
conditionDiv.setAttribute('id', 'conditionInfo')




let country = 'us'
let zip = document.getElementById('zipCode').value
let key  ='61243455494583beaa9d02e13c7f29e3'

firstButton.addEventListener('click', () => {
  async function zipWeather(url) {
    
    try {
      const response = await axios.get(url);
      console.log(response);
      conditionDiv.innerText = response.data.weather[0].description
      tempDiv.innerText = response.data.main.feels_like
      cityDiv.innerText = response.data.name
      
    } catch (error) {
      console.error(error);
    }
  }
  let zip = document.getElementById('zipCode').value

  zipWeather(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${key}`)

})
