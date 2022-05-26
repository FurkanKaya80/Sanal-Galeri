var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var kullaniciSchema = new Schema({
    Name: {type:String, require:true, unique: true},
    Email: {type:String, require:true, unique: true},
    password: {type:String, require:true}
},{collection:'kullanicilar'});

var kullanici = mongoose.model('kullanici',kullaniciSchema);

module.exports = kullanici;
