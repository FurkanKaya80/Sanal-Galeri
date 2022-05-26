
module.exports.index = function(req, res){
    res.render('futurizm',{kullanicilar:req.session});
}