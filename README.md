# Word Requestor Microservice 
Client/Server API to request hangman words. This repo contains the demo for requesting easy, medium, and hard words using Microclient.py and wordService.js. 

# Requesting and Recieving 
Recieve data using the Python requests library using ```response = requests.get(URL) ```

This data can be found in the wordData.json file, an the server will return a single word to the user. 
There is no specific format, but all words will be lowercase. 
Example output 
```Easy Response:  hat
Medium Response:  house
Hard Response:  elephant
```

# Setup 

Install needed python libraries:
```
python3 pip install requests 
```

### Run Server
```
npm run start
```
To stop, hit `ctrl+C` or `cmd+C` (keyboard interrupt)

### Run CLient 
```
python3 Microclient.py
```
Will stop automatically when all commands have been run 

### UML Diagram 
![UMLdiagramWordService](https://user-images.githubusercontent.com/114196862/218665464-24e9f2d5-aceb-4844-b76e-426b4daa90ff.png)
