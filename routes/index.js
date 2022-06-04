var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

/* GET form. */
router.get('/new', function(req, res, next) {
  res.render('form', {title: "Enter your message"} )
});

/* POST form. */
router.post("/new", function(req, res, next) {
  console.log(req.body)
  messages.push({text: req.body.message, user: req.body.user, added: new Date()});
  res.redirect("/")
})


module.exports = router;


