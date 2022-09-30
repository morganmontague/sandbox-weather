---

# Weather App

---
### Instructions from document

1. Use JS to render the entire app (only have a single <div id='main'></div> in the body of your index.html).
2. Use https://openweathermap.org/’s API to fetch weather data.
3. Allow the user to enter their location (zip code is probably easiest) and press a button to load the weather.
4. Run an onClick or onSubmit that executes an Axios GET request to retrieve weather data from the API.
    - Handle successful and unsuccessful attempts
    - If the request is successful, display the following in a 'mobile app' format:
        - City name
        - Current weather conditions
        - Current temperature in Kelvin, Fahrenheit, and Celsius
         - A unique image, decided by the current temperature (The API has icons built-in, be sure to read the docs)
         - If the request is unsuccessful, display a specific error message such as "Invalid Zip Code" or anything else that might come back from the API.
5. Allow the user to continue entering new zip codes to get new weather data.
6. Design should include a RESPONSIVE layout utilizing Bootstrap’s layout classes that works on both mobile and desktop (with different layouts) and applies atomic design principles for a professional looking presentation.


## OBJ/Var

- api information, the api is from openweatheapp.org, that has updated weather information
    - Need an account to get an api key to access the data
    - using the zipcode location to find the area targeted, only using US zipcodes
        - stretch goal would be to use geolocate or other countries allowed
    - from the api we will get the city, temperature in kelvin, conditions and a little icon image
    - From the kelvin, convert to celcius and fahrenheit
- Axios will be utilized for this project, axios is a npm, or a node package manager
    - NPMs are helpful for developers, and always written as JSON (javascript object notation)
    - Axios is similar to the fetch method in js but is slightly different, it uses a url in object request, uhh need to look into this more
- bootstrap is needed for this project as well, setting classes to element will apply css 
- zip code, stored as a variable after the user inputs it, will need to be verified to be valid
- button, created dynamically, will trigger the request to the api to get the weather information for the desired valid zip code
    -  Will also be dynamic and change to reset button after displaying the weather information
    -  Once reset, will allow to search for another different zipcode
  ## Functions
  
  * init() - This function will run on load, using JavaScript to generate a div for the header section
    * Creates an h1 section for the name of the app
    * creates a method to input the data to the program with a label and input button
        * The input will have parameters set to only allow numbers and not above 99999, this is a definsive code to try and prevent wrong zip codes
        * If stretch goal for other countries(Great Britain), is met, the parameters will be changed due to letters and length change
    * The function also places attributes for ids and classes to help identify the created elements 
* pop()  - This function will make a new div container to contain the weather apps four sections and set attributes for the class and id to help identify the div
* createElement(area, element, text, clas, parent) - This function is used to generate more elements, with specified parameters to help specilize each new element
    * area - This indicates where the element will be put in the dom, it also will influence the id created for the element
    * element - this will decide what the element created is.
    *     * text - Will put text into the element if specified leave a blank string to not add content
    * clas - stands for class, can't use class due to it being declared already. This will be used to add the bootstrap classes to help with the design of the app
    * parent - This parameter will dictate where the new element will be appended under.
* btnClick() - This is a function with a bad name, This will run createElement for each element created after init and pop. With future additions the hope is to run a for loop with objects to help allieviate the amount of code written.
* reset() - Reset will remove each of the four sections created by using .remove() and removing the parent element and the children with it. This will also confirm the button is reset just in case of a invalid zip is added
* firstButton() This function will trigger on the click of the button, has four main actions
    * Runs the asynchronous try()
        * try() Sends the inputed zipcode to the api to get the desired information. Will return in json and convert this to readable object. The data needed will then be set as the appropiate innerText or further converted to find celcius and fahrenheit. If an invalid zipcode is entered it will catch this and return an alert to inform the user.
    * Runs pop()
    * Runs btnClicked() 
    * firstButton will run an if else statement to help configure the button between the submit and reset version.

## PROCEDURE

The weather app will be able to take user input for a zip code, using the zip code it will retreive data from an api on weather data, and return, interperate and visualize the data.

The page will load init(), which creates an h1, label, input, and a button. It will do this dynamically but still hardcoded, the label, input and button needed more attributes then most elements in this web page weather app. The input will be specified for zip codes, however not every five number combination is a valid zip code, so we will have to prepare for that.

The user will insert a zip code and click the submit button and it will activate a click event with multiple functions attached.

The try() function uses axios to get the data from the weather api. It will use a catch feature (sorta like an if else) that will return an error if not a valid zip code is entered.
```
firstButton click triggers ClickEventListener
    Onclick check submitted data
        If catch data from the zipcode is not valid
            Return Error to user in form of Alert
        Else 
            Retrieve data json and prepare to interpret and make readable to user
```
---

### The api url explained

Below is an axample url sent to the api, it has three areas of note.
- Api Key
- Zip Code Section
- Country

The country isn't as important unless stretch goal for more countries is added. *
```
Example
let key = 61243455494583beaa9d02e13c7f29e3
let country = us
let zip = user input zip code
using templete literals the url is updated for each search
zipWeather(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${key}`)
```

---
The API will return a lot of data, the try function will retrieve the required data.
City, Temperature in Kelvin, condition and icon code.

The city and condition can be used as is. The Kelvin will be used to report on kelvin and to get the celcius and fahrenheit.
```
        K = kelvin, c = celcius and f = fahrenheit
        let c = Math.round(k - 273.15)
        let f = Math.round(c*(9/5) + 32)
```
The icon code is put into a source for an image using templete literals
```
example icon = n02
let src = `https://openweathermap.org/img/wn/${icon}@2x.png`
```
---
While the try function is retrieving the weather data, other activities are triggered along side.


The click will trigger pop() and btnClick(), both are creating new elements using the function createElement(). This section is more hardcoded than wanted. As explained above five parameters are needed. Each function will create the specified element and append it at the specified parent creating 4 sections new sections to display the data collected by try().

The button click will trigger a change in the button itself changing colors and changing the text to reset. Using an if else statement is the reason for this change. If the button is clicked and the inner text is Submit, the color will change by adding a class and the inner text is changed to Reset.

The reset() is also set to the if else statement. If the button is clicked while the buttons inner text is equal to reset the button changes colors again with a class, back to the original color and the text is set to submit. The reset function will remove the parent elements of each section that was created by btnClick. This will also remove the child elements as well, setting the page back to the starting phase.

### Concerns
Not sure how to use for loops with parameters.
Bootstrap is still weird
No stretch goals were met..
