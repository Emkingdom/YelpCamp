const express       = require("express"),
      bodyParser    = require('body-parser'),
      mongoose      = require("mongoose"),
      flash         = require("connect-flash"),
      passport      = require("passport"),
      LocalStrategy = require("passport-local"),
      app           = express(),
      User          = require("./models/user"),
      methodOverride= require("method-override"),
      seedDB        = require("./seeds")
     
const indexRoutes = require("./routes/index"),
      campgroundRoutes = require("./routes/campgrounds"),
      commentRoutes = require("./routes/comments")


//DATA BASE CONECTION
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/yelp_camp_v6", {useMongoClient: true});

//DODY PARSE SETUP
app.use(bodyParser.urlencoded({ extended: false }))

// VIEW ENGINE SET UP
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"))
app.use(flash());

//seedDB();no for now

//PASSPORT CONFIG
app.use(require("express-session")({
    secret: "Once again Rex wins cutes dog!",
    resave: false,
    saveUninitialized:false 
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(function(req, res, next){
  res.locals.user = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});
app.use("/", indexRoutes)
app.use("/campgrounds", campgroundRoutes)
app.use("/campgrounds/:id/comments", commentRoutes)


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Yelpcam server has started")
})