const express = require('express'),
      router = express.Router(),
      Campground = require("../models/campground"),
      middleware = require("../middleware")

router.get("/", (req, res) => {
        //GET ALL CAMPGROUND FROM THE DATABASE
        Campground.find({}).populate("comments").exec(function(err, campground) {
            if(err){
                console.log(err)
            } else {
                res.render("campgrounds/index", {campground:campground})

            }
        })

})

router.get("/new", middleware.isLoggedIn, (req, res) => {
    res.render("campgrounds/new")
})

router.post("/", middleware.isLoggedIn, (req, res) => {
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let author = {
        id: req.user.id,
        username: req.user.username 
    }
    let price = req.body.price;
    let newCampground = {name:name, price:price, image:image, description:desc, author: author}

//CREAT NEW CAMPGROUND AND SAVE
    Campground.create(newCampground, function(err, campground) {
            if(err) {
                console.log(err);
            } else {
                //REDIREXT TO CAMPGROUND
                res.redirect("/campgrounds");
            }
        })

})

//SHOW -  MORE INFO ABOUT  CAMPGROUND
router.get("/:id", (req, res) => {
    //Find the campgound with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, campground) {
        if(err){
            console.log(err)
        } else {
            res.render("campgrounds/show", {campground: campground})
        }
    });
    //Render show tamplate with that campground;
})


//EDIT ROUTES 

router.get("/:id/edit", middleware.checkCampgroundOwnership, (req,  res) => {
    Campground.findById(req.params.id, (err, campground) => {
        res.render("campgrounds/edit", {campground: campground})        
    });
})

router.put("/:id", middleware.checkCampgroundOwnership, (req, res) => {
    Campground.findByIdAndUpdate(req.params.id, req.body, (err, updateCampground) => {
        if(err){
            res.redirect("/campgrounds")
            console.log(err)
            
        }  else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    })
})

router.delete("/:id", middleware.checkCampgroundOwnership, (req, res) => {
    Campground.findByIdAndRemove(req.params.id, (err, campground) => {
        if(err) {
            res.redirect("/campgrounds")
         } else {
             res.redirect("/campgrounds")
         }
    })
})



module.exports = router;