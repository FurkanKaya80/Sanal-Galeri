

module.exports.index = function(req, res){
   // res.sendFile(path.join(__dirname, '../anaindex.html'));
   res.render('anaindex',{kullanicilar:req.session});
   console.log(req.session);
   
}
/* <% if (x==0) { %>
                    <a class="login" href="login">Oturum aç</a>
                   <% } %> 
           <% if (x==1) { %>
                    <a class="login" href="/">Oturum kapat</a>
                   <% }  %>   
                   <% if (x==1) {x = 0;} %>     */