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
