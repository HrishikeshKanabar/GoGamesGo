// Express JS dependency
const exp = require("express");

// Start
const app = exp();
const PORT = process.env.PORT || 3001;

const games = {
    name: 'GTA',
    consoletype: 'Playstation',
    releasedate: '2012',
    type: 'war'
  };

  // Routes
// ===========================================================
app.get('/', (req, res) => {
    res.send('Welcome to the page!');
    res.json(games)
  });

  // port test
app.listen(PORT, () => {
  console.log("API server Started on port !!!");
});