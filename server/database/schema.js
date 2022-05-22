const con = require('./sql_connect')

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

var posts = "CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY, description VARCHAR(255) NOT NULL, feedback VARCHAR(255))"

con.query(posts, function (err) {
    if (err) throw err;
    console.log("Post Table created");
});