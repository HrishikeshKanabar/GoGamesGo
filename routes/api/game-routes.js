const router = require("express").Router();
const { response } = require("express");
const {Reviews,Game } = require("../../models");

// The '/api/games/' endpoint

router.get("/", (req, res) => {
    // find all games
    // be sure to include its associated Reviews
    Game.findAll({
      include: [Reviews],
    }).then((GameReviews) => {
      res.json(GameReviews);
    });
  });

  module.exports = router;