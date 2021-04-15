var express = require('express');
var router = express.Router();
var data= require('../services/store');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var results=data.getdata();
  res.send(results);
});

router.post('/test', function(req,res,next){
  let task=req.body.data;
  var results=data.getdata();

  res.send(results[task]["work"]);
});

router.post('/addtask',function(req,res,next){
  let work=req.body.data;
  var results=data.getdata();
  var n = results.includes(work);
  if(n===true){
    res.send("WORK ALREADY ADDED");

  }
  else{
    data.adddata(work);
    res.send("WORK ADDED TO-DO LIST")
    
  }

})

router.post('/deldata', function(req, res, next) {
  let work=req.body.data;
  var results=data.getdata();
  var n = results.includes(work);
  if(n===true)
  {   
  data.deletedata(work);
  res.send("WORK-DELETED from TO-DO LIST");
  }
  else{
    res.send("This task is not in the TO-DO list")
  }
});

router.post('/updata', function(req, res, next) {
  let work=req.body.data;
  let upwork=req.body.upwork;

  var results=data.getdata();
  var n = results.includes(work);
  if(n===true)
  {   
  data.updatedata(work,upwork);
  res.send("tasK-UPDATED in TO-DO LIST");
  }
  else{
    res.send("This task is not in the TO-DO list")
  }
});


module.exports = router;
