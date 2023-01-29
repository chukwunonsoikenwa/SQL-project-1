var express = require('express');
var app = express(); 
var mysql = require('mysql');

app.set("view engine", "ejs");

 var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'sql_test',
    // password: "",
      insecureAuth : true
    });

app.get("/", function(req, res){
    // find count of users in db
    var q = "select count(*) as count from users";
    connection.query(q, function (error, results) {
        if (error) throw error;
        var count = results[0].count;
        console.log(results[0].count);
        // res.send("We have " + count + " users in our database");
        res.render("home", {data: count});
    });

    // Respond with that count
    
    //res.send("We have" + Count + "users in our database")

});

app.get("/joke", function(req, res){
    var joke = "Funny guy"
    console.log("requested joke");
    res.send(joke);
});
// app.get("/random", function(req, res) {
//     var num = Math.floor(Math.random() * 10) + 1;
//     console.log("Random!!!");
//     res.send(num);
// }); 

app.listen(8020, function(){
    console.log("server running here");
    
});
