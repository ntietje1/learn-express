const express = require("express");
const router = express.Router();

router.get("/usernames", (req, res) => {
  let usernames = req.users.map(function (user) {
    return { id: user.id, username: user.username };
  });
  res.send(usernames);
});

router.get("/user/:name", (req, res) => {
  let user = req.users.find((user) => user.username === req.params.name);
  if (user) {
    res.send(user);
  } else {
    res.send("user not found");
  }
});
