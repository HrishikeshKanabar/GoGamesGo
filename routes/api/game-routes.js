const router = require("express").Router();
const { response, Router } = require("express");
const {Reviews,Game } = require("../../models");
const popup = require('node-popup');
const { Op } = require("sequelize");
const notifier = require('node-notifier');
// The '/api/games/search' endpoint

router.post("/search", (req, res) => {
    
    console.log(req.body);
    Game.findAll({
      where: {
        [Op.or]: [
          {game_title:{[Op.like]:'%'+req.body.keyword+'%'}},
          {game_genre:{[Op.like]:'%'+req.body.keyword+'%'}},
          {game_desc:{[Op.like]:'%'+req.body.keyword+'%'}},
          {console:{[Op.like]:'%'+req.body.keyword+'%'}}
         
        ]
      },
      raw:true
    }).then((GameReviews) => {
      //res.json(GameReviews);
      //console.log(GameReviews);
      return res.render('gamecards',{games:GameReviews});
    });
  });

// Add game to database 
router.post("/",(req, res)=>{
      // create a new category
  Game.create({
    game_title: req.body.gamename,
    publication_year:req.body.releaseyear,
    game_genre:req.body.gamegenre,
    game_desc:req.body.description,
    console:req.body.consoletype,
  }).then((newGame) => {
    //res.json(newGame);
    res.redirect('/');

  });
});


router.get("/reviews/:id",(req, res)=>{
   //console.log(req.params.id);
   Game.findOne({
    where: {
      id:req.params.id,
    },
    include: [Reviews],
    raw:true
  }).then((rev) => {
    //res.json(rev);
    return res.render('gamecard',rev);
  });
});

router.post("/addreviews/:id",(req,res)=>{
  console.log(req.body);
  Reviews.create({
    review_desc:req.body.comment,
    rating:req.body.test,
    game_id:req.params.id
  }).then((newReview) => {
    //res.json(newReview);
    res.redirect('/api/games/reviews/'+req.params.id);

  });
})





  module.exports = router;

