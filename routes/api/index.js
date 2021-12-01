const router = require("express").Router();
const gameRoute = require("./game-routes");

router.use("/games", gameRoute);

module.exports = router;