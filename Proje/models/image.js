var mongoose = require('mongoose');
const root = require('../fütürizm/');
var Schema = mongoose.Schema;

var resimSchema = new Schema({
    image: {
        type:String,
        get: v => '${root}${v}'
    }
},{collection:'resim'});

var resim = mongoose.model('kullanici',resimSchema);

module.exports = resim;