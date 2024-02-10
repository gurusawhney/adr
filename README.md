# ADR

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In order to validate this project I suggest running `npm install` and `npm start`, however I have also built a Dockerfile for this project. 

`docker build -t adr-app .`

`docker run -p 3000:3000 adr-app`

The application will run on your local browser at [http://localhost:3000](http://localhost:3000) using either method.

### Navigation
`http://localhost:3000/cues` is the home page. This is a table of `cue`. You can select a cue to view their dashboard. You should automatically get redirected here.

`http://localhost:3000/dashboard/{cue.name}}` is the dashboard URL. This is a unique URL per cue.

### Material UI
Material UI was the React UI Component library I leveraged in this project. More information can be found on [Github](https://github.com/mui/material-ui/tree/v5.14.20).
