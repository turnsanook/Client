var express = require('express')
var app = express()

app.use(express.static(__dirname + '/images'));

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/computer', function(req, res){
   res.render('computer', {computer: [{title: 'window', image: '1.jpg'}
   									,{title:'OSX',image: '2.JPG'}
   									,{title: 'Android',image: '3.png'}
   									 ,{title: 'IOS',image: '4.jpg'}], name: 'Computer'})
})
app.listen(8000)