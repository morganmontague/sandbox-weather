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


