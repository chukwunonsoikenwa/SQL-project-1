var faker = require('@faker-js/faker');
// const { appendFile } = require('fs');
var mysql = require('mysql');
 var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'sql_test',
    // password: "",
      insecureAuth : true
    });

    // connection.connect(function(err) {
    //   if (err) throw err;
    //   console.log("Connected!");
    // });

//     database : 'ig_clone'
//  });
// var q = 'select count(*) as total from users';
// connection.query(q, function (error, results, fields) {
// if (error) throw error;
// console.log(results[0].total);
    // console.log(results[0].time);
    // console.log(results[0].date);
    // console.log(results[0].now);
// });
// Inserting data take 1
var q = 'INSERT INTO users (email) VALUES ("js3fe11du_the_og@gmail.com")';
 
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

// inserting data take 2
// var person = {
//   email: faker.internet.email()
   // created_at: faker.date.past()
// };
 
// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });


//connection.end();