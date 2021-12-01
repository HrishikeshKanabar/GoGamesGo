// import models
const Game =  require("./Game");
const Reviews = require("./Review")


// One Game has many reviews

Game.hasMany(Reviews,{
    foreignKey: "game_id",
});

//One review belongs to one game 

Reviews.belongsTo(Game,{
    foreignKey: "game_id",
});

module.exports = {
    Game,
    Reviews
};