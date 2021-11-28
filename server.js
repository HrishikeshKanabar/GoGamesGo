// Express JS dependency
const exp = require("express");

// Start
const app = exp();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(exp.urlencoded({ extended: true }));
app.use(exp.json());
app.use(exp.static(__dirname + "/public"));

// Demo
const games = {
    name: 'GTA',
    consoletype: 'Playstation',
    releasedate: '2012',
    type: 'war'
  };

  // Routes
// ===========================================================
app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname + "/../public/index.html"));
  
  });

  // port test
app.listen(PORT, () => {
  console.log("API server Started on port !!!");
});