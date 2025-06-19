const { urlencoded } = require('body-parser');
const express = require('express');

app = express();
const port = 8000 || process.env.PORT;


app.use(urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));
app.set('view engine','ejs')

app.use('/',require('./server/routes/route_pages'));

app.use((req,res, next)=>{
    local={
        title:"404"
    }
    res.render('404',{local});
})



app.listen(port,()=>{
    console.log(`app listening to port ${port}`);
})


