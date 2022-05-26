
module.exports.index = function(req, res){
    res.render('minimalizm',{kullanicilar:req.session});
}