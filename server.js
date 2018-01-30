const express = require("express");
const path = require('path');
const app  = express();

const port = process.env.PORT || 3253;
 
  app.use(express.static('build'))
  
  app.get('*', (req, res) => {
      console.log('this id __dirname', __dirname)
      const index = path.resolve(__dirname, './build', './index.html');
      res.sendFile(index);
  });

app.listen(port,  () => {
    console.log("Server's starting!!");
}) 