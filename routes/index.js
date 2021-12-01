const router = require('express').Router();
const apiRoutes = require('./api');
const path = require("path");

router.use('/api', apiRoutes);
module.exports = function (app) {
    router.use((req, res) => {
      res.sendFile(path.join(__dirname + "public/index.html"));
    });
}

module.exports = router;