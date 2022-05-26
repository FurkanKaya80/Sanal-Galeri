var kullanici = require('../models/kullanici');
var alert =require('alert');
const { find } = require('../models/kullanici');
const session = require('express-session');



module.exports.index = function(req, res){
    if(req.session.userId){
        res.redirect('/');
    }
    else{
        res.render('giris');  
    }
}
module.exports.indexPost = function(req, res){
    //console.log(req.body);
    
    kullanici.findOne({Name:req.body.Name, password:req.body.password }, function (err, kullanici) {
        if (kullanici == null){
            console.log(err);
            res.redirect('/giris');
            alert("Girdiğiniz bilgilerde bir kullanıcı mevcut değil");
        }
        else{
            req.session.Name = kullanici.Name;
            req.session.userId = kullanici._id;
            console.log("Result : ", kullanici, req.session);
            res.redirect('/');
        }
    });
    
}
 