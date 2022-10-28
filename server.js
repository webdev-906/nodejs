// setup a server to listen to responses 
const express = require('express');
const app = express(); 
const port = process.env.PORT || 4000

// set up the main route directory 
app.get('/', (request, response) => {
response.send("What is up with you?")
})


app.listen(port, () => {
  console.log(`I'm Listening on port ${port}`)
})

