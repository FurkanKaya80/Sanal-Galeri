
module.exports.index = function(req, res){
    res.render('surrealizm',{kullanicilar:req.session});
}