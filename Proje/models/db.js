var mongoose = require('mongoose');




mongoose.Promise = require('bluebird');
var mongoDB = 'mongodb://127.0.0.1/Proje';

/*mongoose.connect(mongoDB,{
      useNewUrlParser: true,
      useUnifiedTopology: true
});*/

mongoose.connect(mongoDB,function(err,err){
     if(err){
         //console.log('mongoose hatasi:' , err);
         console.log('mongoose baglandi: ' , mongoDB);
     }
     else{
         console.log('mongoose baglandi: ' , mongoDB);
     }
})


