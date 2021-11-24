var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// router.post('/', function(req, res){
//   const body = req.body;

//   client.query('use goom0803', () => {
//     console,log('데이타베이스 사용')
//   });

//   client.query('select * from userInfo where userid=?', [body.id], (err, result) => {
//     if(err) {console.error(err);}
//     console.log('아이디 검사 :: result ==>', result);

//     if(result == "") {
//       res.send("<script>alert('error : ID error'); history.back();</script>");
//     }
//     else{
//       const decipherPW = decrtpt(result[0].pw);
//       if(body.password == decipherPW) {
//         console.log("good login");

//         req.session.userid = body.id;
//         req.session.loggedin = true;
//         req.session.save(() => {
//           res.render('index', {
//              id: req.session.userid, 
//           });
//         });
//       }
//       else{
//         res.send("<script>alert('error : pw error');</script>");
//       }
//     }
//   });
// });





module.exports = router;
