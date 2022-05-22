const express = require("express");
var router = express.Router();
const con = require("../database/sql_connect");

router.get('/posts', (req,res) =>{
   var query = "SELECT * FROM posts WHERE feedback IS NULL";
   con.query(query, (err, results)=>{
      if(err){
        console.log(err);
        console.log("Something went wrong");
        res.json({status: 400});
      }else{
        res.json({status: 200, results: results});
      }
   })
})

router.post('/feedback', (req, res) =>{
    const {post_id, feedback} = req.body;
    var query = "UPDATE posts SET feedback = ? WHERE id = ?";
    con.query(query,[feedback, post_id], (err, results)=>{
       if(err){
        console.log(err);
        console.log("Something went wrong");
        res.json({status: 400});
       }else{
        res.json({status: 200});
       }
    })
})


module.exports=router;