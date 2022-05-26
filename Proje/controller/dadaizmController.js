
module.exports.index = function(req, res){
    res.render('dadaizm',{kullanicilar:req.session});
}