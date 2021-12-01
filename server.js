const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');
// handle bars


const app = express();
const PORT = process.env.PORT || 3001;
// Set Handlebars as the default template engine.



var exphbs  = require('express-handlebars');
var hbs = exphbs.create({ defaultLayout: 'main' });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use(routes);

sequelize.sync({ force: true });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});