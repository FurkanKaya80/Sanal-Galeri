
module.exports.index = function(req, res){
    res.render('popart',{kullanicilar:req.session});
}