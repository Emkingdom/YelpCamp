const mongoose      = require("mongoose")
const Campground    = require("./models/campground")
const Comment       = require("./models/comment")


var data = [
        {
            name: "Cloud's Rest",
            image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            name: "Cloud's Rest",
            image: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?auto=format&fit=crop&w=1006&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            name: "Cloud's Rest",
            image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?auto=format&fit=crop&w=1053&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            name: "Cloud's Rest",
            image: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?auto=format&fit=crop&w=959&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
    ]


function seedDB () {
    //Remove campground 
    Campground.remove({}, function(err) {
        // if(err) {
        //     console.log(err)
        // } else{
        //     console.log("Campground Removed")
        //     Comment.remove({}, function(err) {
        //         if(err) {
        //             console.log(err)
        //         } else {
        //             console.log("Comment Removed")
        //             data.forEach(function(seed) {
        //                  Campground.create(seed, function(err, data) {
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         console.log("Save data")
        //                         //Add coment 
        //                         Comment.create(
        //                             {
        //                                 text: "This is a nice coment to test",
        //                                 author: "Boldemor "
        //                             }, function (err, comment) {
        //                                 if(err) {
        //                                     console.log(err)
        //                                 } else {
        //                                     data.comments.push(comment)
        //                                     data.save()
        //                                     console.log("Coment created")
        //                                 }
        //                             })
        //                     }
        //                 })    
        //             })    
        //         }
        //     })
        //     //Add campground
            
        // }
    })
    
    
}

module.exports = seedDB;