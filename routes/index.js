var express = require('express')
var router = express.Router()  
var User = require("../models/user")
var passport = require("passport")

router.get("/", (req, res) => {
    res.render("landing")
});


router.get("/register", (req, res) => {
    res.render("register")
})

router.post("/register", (req, res) => {
    console.log(req.body)
    let newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password,  function(err, user) {
        if(err){
            req.flash("error", err.message)
            return res.render("register")
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to Yelpcamp: " + user.username)
            res.redirect("/campgrounds")
        })
    })
})

router.get("/login", (req, res) => {
    res.render("login")
})

router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }),  (req, res) => {
    
})

router.get("/logout", (req, res) => {
    req.logout();
    req.flash("success", "Logout success")
    res.redirect("/campgrounds")
    
})

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login")
}


module.exports = router;