console.log('running')
function init () {
  // declaring main div made in index, used to 'house' the rest of the html
  let mainDiv = document.getElementById('main');
  mainDiv.setAttribute('class', 'container-fliud "text-center')
  // mainDiv.innerText = 'This is the parent Div'
  
  
  // creating a div to serve as the header, where the h1 and buttons will go
  // try for fix up by using function createElement created below
let divHead = document.createElement('div')
mainDiv.appendChild(divHead)
divHead.setAttribute('id', 'headContainer')
divHead.setAttribute('class', 'container text-center')
let headArea = document.getElementById('headContainer')
// headArea.innerText='This will be the header with buttons';

// creating h1
// try for fix up by using function createElement created below

let h1Area = document.createElement('h1');
headArea.appendChild(h1Area);
h1Area.setAttribute('id', 'idTag');
h1Area.setAttribute('class', 'h1');
h1Area.innerText = 'Weather App';

// creating the label
//labels are a little tricky for me so no createElement
let inputLabel = document.createElement('label')
headArea.appendChild(inputLabel);
inputLabel.setAttribute('for', 'zipCode');
inputLabel.setAttribute('id', 'zipLabel');
inputLabel.innerText='Enter Zip Code';
inputLabel.setAttribute('class', 'form-label')
inputLabel.setAttribute('style', 'margin: 5px')

// creating the input area for the zip code
// try and add restrictions so it has to be a valid zip
let inputNumber = document.createElement('input')
headArea.appendChild(inputNumber)
inputNumber.setAttribute('id', 'zipCode')
inputNumber.setAttribute('type', 'number')
inputNumber.setAttribute('name', 'zipCode')
inputNumber.setAttribute('class', 'form-number')
inputNumber.setAttribute('maxlength', 5)
inputNumber.setAttribute('max', 99999)
inputNumber.setAttribute('placeholder', 'Zip Code')

// creating the submit input
// changed to a button so I could control the innerText better
let inputSubmit = document.createElement('button')
headArea.appendChild(inputSubmit)
inputSubmit.setAttribute('type', 'submit')
inputSubmit.innerText = 'Submit'
inputSubmit.setAttribute('id', 'zipCodeButtonSubmit')
inputSubmit.setAttribute('class', "btn-primary")
inputSubmit.setAttribute('style', 'margin: 5px')
}

// init() is sorta pointless here, just wrapped my beggining elements and called it init

init()


// declaring global variables to help my life in general..

let button = document.getElementById('zipCodeButtonSubmit')


let firstButton = document.getElementById('zipCodeButtonSubmit')


let mainDiv = document.getElementById('main')

// this will make the new div container to hold my weather info
function pop() {
  let popCreate = document.createElement('div')
  mainDiv.appendChild(popCreate)
  popCreate.setAttribute('id', 'popArea')
  popCreate.setAttribute('class', 'container')
  // popCreate.innerText = 'new pop'
}
pop()

// named poppy in honor of poppy
let poppy = document.getElementById('popArea')

// This is an attempt to try and ease up my hard code, didn't get it perfect, wish I could have run my parameters through it
// really liked the templete literals and parameters making it easy to "use"
function createElement (area, element, text, clas, parent, meh) {
  let ids = `${area}id` 
  let createElement = document.createElement(element)
  parent.appendChild(createElement)
  createElement.setAttribute('id',ids, meh)
  createElement.setAttribute('class', clas)
  createElement.innerText = `${text}`
}

// This is sorta hard coded, couldn't figure out the looping with multiple parameters
function btnClick () {
  createElement('city', 'div', '', 'container rounded h4  justify-content-center', poppy, 'box-color')
  let cityParent = document.getElementById('cityid')
  createElement('cityTitle', 'p', 'Location', 'bg-sucess text-center justify-content-center ', cityParent, 'box-color')
  createElement('cityInfo', 'p', '', ' text-center justify-content-center', cityParent, 'box-color')
  
  createElement('temp', 'div', '', 'container rounded justify-content-center', poppy, 'box-color')
  let tempParent = document.getElementById('tempid')
  createElement('tempTitle', 'p', 'Temperature', ' row h4 bg-sucess text-center justify-content-center', tempParent, 'box-color')
  createElement('tempInfo', 'div', '', ' container row h4 justify-content-center', tempParent, 'box-color')
  let degreeParent = document.getElementById('tempInfoid')
  createElement('kelvin', 'p', '', 'col-md-auto   text-center', degreeParent, 'box-color')
  createElement('celcius', 'p', '', 'col-md-auto  text-center', degreeParent, 'box-color')
  createElement('fahren', 'p', '', 'col-md-auto  text-center', degreeParent)
  
  createElement('condition', 'div', '', 'container rounded h4  justify-content-center', poppy)
  let conditionParent = document.getElementById('conditionid')
  createElement('conditionTitle', 'p', 'Condition', 'row justify-content-center', conditionParent)
  createElement('conditionInfo', 'p', '', 'row justify-content-center', conditionParent)
  
  
  createElement('other', 'div', '', 'container rounded h4 justify-content-center', poppy)
  let otherParent = document.getElementById('otherid')
  createElement('otherTitle', 'p', 'Other Info', 'row bg-sucess text-center justify-content-center', otherParent)
  createElement('otherInfo', 'img', '', 'row bg-sucess text-center justify-content-center', otherParent)
}

// This is to reset the weather apps pop up, tried to just remove poppy, but it broke the whole thing so instead I remove each section one by one
function reset () {
  let resetCity = document.getElementById('cityid')
  let resetTemp = document.getElementById('tempid')
  let resetCondition = document.getElementById('conditionid')
  let resetOther = document.getElementById('otherid')
  // let zip = document.getElementById('zipCode').value  can't figure this part out
  resetCity.remove()
  resetTemp.remove()
  resetCondition.remove()
  resetOther.remove()
  
  button.innerText = "Submit";
      button.setAttribute('class', 'btn-primary')
}

// getting ready for the api call, declaring the variables used in the url, zip equals the value that the user inputs
let country = 'us'
let zip = document.getElementById('zipCode').value
let key  ='61243455494583beaa9d02e13c7f29e3'

// button click event, runs pop(needed to use it earlier for some reason), btnClick and zipWeather
// also has an if else statement to allow for resets
// need to figure out how to stop the sections from loading on a an error catch


firstButton.addEventListener('click', () => {
  if (button.innerText === "Submit") {
    async function zipWeather(url) {
      pop()
      btnClick()
      try {
        const response = await axios.get(url);
        // console.log(response);
        let k = response.data.main.feels_like
        k = Math.round(k)
        let c = Math.round(k - 273.15)
        let f = Math.round(c*(9/5) + 32)
        conditionInfoid.innerText = response.data.weather[0].description
        kelvinid.innerText = k + ' K'
        celciusid.innerText = c + ' C'
        fahrenid.innerText = f + ' F'
        cityInfoid.innerText = response.data.name
        let image = document.getElementById('otherInfoid')
        // console.log(image)
        let icon = response.data.weather[0].icon
        let src = `https://openweathermap.org/img/wn/${icon}@2x.png`
        image.setAttribute('src', src)
        image.setAttribute('class', 'rounded mx-auto d-block')
        image.setAttribute('alt', response.data.weather[0].description)
        
        
      } catch (error) {
        reset()
        alert('You fool');
      }
    }
    let zip = document.getElementById('zipCode').value
    
    zipWeather(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${key}`)

    button.innerText = "Reset";
    button.setAttribute('class', 'bg-warning')
    
  } else {
    (button.innerText=== 'Reset'),
    reset()
      button.innerText = "Submit";
      button.setAttribute('class', 'btn-primary')
      button.setAttribute('placeholder', 'Ukraine')
    }
    
    
  })
  
  // the object state was going to be used if I figured out the loop with multiple paramerters
  
//   let state = {
//     area:
//     {cityContainer:'cityContainer',
//     cityTitle:'cityTitle',
//     cityInfo: 'cityInfo',
    
//     tempContainer: 'tempContainer',
//     tempTitle: 'tempTitle',
//     tempInfo: 'tempInfo',
    
//     conditionContainer: 'condiContainer',
//     conditionTitle: 'condiTitle',
//     conditionInfor: 'condiInfo',
    
//     otherContainer:'otherContainer',
//     otherTitle:'otherTitle',
//     otherInfo:'otherInfo',},
    
    
    
//     element: {
//       cityContainer:'div',
//       cityTitle:'p',
//       cityInfo: 'p',
      
//       tempContainer: 'div',
//       tempTitle: 'p',
//       tempInfo: 'p',
      
//       conditionContainer: 'div',
//       conditionTitle: 'p',
//       conditionInfor: 'p',
      
//       otherContainer:'div',
//       otherTitle:'p',
//       otherInfo:'p',
//     },
    
    
    
//     text: {
//       cityContainer:'',
//   cityTitle:'City',
//   cityInfo: 'place',
  
//   tempContainer: '',
//   tempTitle: 'Temperature',
//   tempInfo: 'place',
  
//   conditionContainer: '',
//   conditionTitle: 'Conditions',
//   conditionInfor: 'meh',
  
//   otherContainer:'',
//   otherTitle:'Other Info',
//   otherInfo:'boo',
// },



// clas: {
//   cityContainer:'container',
//   cityTitle:'col',
//   cityInfo: 'col',
  
//   tempContainer: 'container',
//   tempTitle: 'col',
//   tempInfo: 'col',
  
//   conditionContainer: 'container',
//   conditionTitle: 'col',
//   conditionInfor: 'col',
  
//   otherContainer:'container',
//   otherTitle:'col',
//   otherInfo:'col',
// }
// }
