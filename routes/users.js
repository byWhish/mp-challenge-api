const express = require('express');
const router = express.Router();
const userService = require("../services/userService")

/* GET users listing. */
router.get('/', function(req, res, next) {
  userService.getAllUsers()
  res.status(200)
  res.send('respond with all resources');
});

router.get('/:id', function(req, res, next) {
  userService.getUser(req.params.id)
  res.status(200)
  res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
  userService.addUser(req.body)
  res.status(200)
  res.send('response with a resource');
})

module.exports = router;
