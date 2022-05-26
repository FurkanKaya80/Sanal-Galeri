
module.exports.index = function(req, res){
    res.render('ekspresyonizm',{kullanicilar:req.session});
}