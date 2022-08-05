const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//connect to MongoDB by specifying port to access MongoDB server
main().catch((err) => console.log(err));

//creating a wikiDB after / localhost 
async function main() {
    await mongoose.connect('mongodb://localhost:27017/wikiDB');
    console.log("DB Server is up and running");
    }

// SCHEMA -> MODEL -> DOCUMENT
const articleSchema = {
   
   title: String,
   content: String

};

const Article = new mongoose.model("Article",articleSchema);

//TO MAKE API RESTFUL WE NEED GET,POST,DELETE,PUT AND PATCH

//CHAINABLE ROUTE HANDLERS

app.route("/articles")

.get(function(req,res){

     //for finding and retrieving all the articles
    Article.find({},function(err,foundArticles){
    
    if(!err){
        res.send(foundArticles);

    }
    else{
        res.send(err);
    }    

    });

})

.post(function(req,res){
   
    //for adding a new article
    const newArticle = new Article({
    
      title: req.body.title,
      content: req.body.content
 
    });
 
    newArticle.save(function(err){
     if(!err){
       res.send("Successfully added a new article");
     }
     else{
        res.send(err);
     }
 
    });
  
 })

.delete(function(req,res){
     
    //for deleting all the articles
    Article.deleteMany({},function(err){
        if(!err){
            res.send("Successfully deleted all the articles");
          }
          else{
             res.send(err);
          }
    
    
    });
    
});


//  FOR A SPECIFIC ARTICLE WITH NAME

app.route("/articles/:articleTitle")

.get(function(req,res){
//EXPRESS PARAMETER TO GET localhost:3000/articles/<articleTitle>
Article.findOne({title: req.params.articleTitle },function(err,foundArticle){
 
    if(foundArticle){
        res.send(foundArticle);
    }
    else{
        res.send("No article found on localhost:3000/articles/" + req.params.articleTitle);
    }
});


})

// PUT OVERWRITES THE WHOLE REQUEST
.put(function(req,res){

  Article.updateOne(

    { title: req.params.articleTitle },
    { title: req.body.title, content: req.body.content },
  (err) => {

     if(err){
         res.send(`Error: ` + err)
     }
     else{
        res.send("Successfully updated" + req.params.articleTitle +  "title using put");
     }

  });

})


//USING PATCH ONLY A SINGLE CHANGE CAN ALSO BE MADE
.patch(function(req,res){

    Article.updateOne(

        { title: req.params.articleTitle },
        { $set: req.body },
      (err) => {
    
         if(err){
             res.send(`Error: ` + err)
         }
         else{
            res.send("Successfully updated" + req.params.articleTitle +  "title using patch");
         }
    
      });

      

})


.delete(function(req,res){


   Article.deleteOne(
    
    { title: req.params.articleTitle}, 
    (err) => {
   
        if(err){
            res.send(`Error: ` + err)
        }
        else{
           res.send("Successfully deleted" + req.params.title + " title");
        }
   });
  

});


app.listen(3000, function(req,res){
  
     console.log("EXPRESS Server has been started and running");

});