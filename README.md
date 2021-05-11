# PirateHub (fullstack-interview-test)

This project show you the history of all the changes, using an application in react and api that get all the information from the official github api.

You need to have installed docker and docker-compose for run this project and also you need a token of github author of this project.

Now for can run this project follow next steps
* Clone this repository
* Copy the file `.env.example` and rename like `.env` and complete the variables
```
// GITHUB TOKEN
TOKEN={author token of this repository}
```
* Build dockers files
```bash
docker-compose -f docker-compose.yml build
```
* Start project
```bash
docker-compose -f docker-compose.yml up
```
* Got to browser and write http://localhost:3000 this show you the web app
* Click in watch demo
* Can write http://localhost:5000 this is the url to api
  
Also you can run the test
* You need have to installed node version 15
* Go to backend folder
* Run `npm install`
* Now export the faketoken in the terminal `export TOKEN=1a2b3c4d5e6f7g8h9` 
* Run tests `npm run test`
* Get coverge report `npm run test:coverage`

You can read more details on docs folder