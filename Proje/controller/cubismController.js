
module.exports.index = function(req, res){
    res.render('cubism',{kullanicilar:req.session});
}