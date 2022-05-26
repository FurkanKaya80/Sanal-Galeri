var path = require('path');
var kullanici = require('../models/kullanici');
var alert =require('alert');


module.exports.index = function(req, res){
    if(req.session.userId){
        res.redirect('/');
    }
    else{
        res.sendFile(path.join(__dirname, '../login.html'));  
    }
}
module.exports.indexPost = function(req, res){

    var yenikullanici = new kullanici({
        Name:req.body.Name,
        Email:req.body.Email,
        password:req.body.password
    });

    yenikullanici.save(function(err) {
             if(err){
                alert("Bu isimde veya maile sahip  biri zaten kayıtlı");
                res.redirect('/login');
             }
             else{
                res.redirect('/giris');
             }
    });

    console.log(yenikullanici);
    
}
