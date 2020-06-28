const express = require('express');
const crypto = require('crypto');
const child_process = require('child_process');
const app = express();
const port = 8666;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.get('/', (req, res) => {
  res.send("Nothing to see here")
})

app.post('/', (req, res) => {
  const where = req.body.where;
  const cookies = req.body.cookies;
  res.send("Thanks");
  child_process.execFile("powershell.exe", ["C:/Users/jessi/code/jessitron/cattrap/yo-jess.ps1",
    "-Message",
    "Cookies: " + req.body.cookies,
    "-Title", "Got a hit from: " + req.body.where], (err, stdout, stderr) => {
      console.error(stderr);
      cb(err, outputName);
    });
});

app.listen(port, () => console.log(`CatTrap listening on port ${port}!`))