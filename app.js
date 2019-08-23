const Express = require('express');
var app=new Express();
app.set('view engine','ejs');
app.use(Express.static(__dirname+"/public"));


writers =[
    {
      title:"JRR Tolkien",
      picture:"/images/tol.jpg",
      genre:"Britian",
      author:"1892",
      books:"lord of the rings,Hobbit.."
},

{
    title:"JK rowling",
    picture:"/images/jk.jpg",
    genre:"Britian",
    author:"1965",
    books:"Harry Potter series"
},

{
    title:"APJ abdul kalam",
    picture:"/images/wings.jpg",
    genre:"India",
    author:"1931",
    books:"wings of fire"
},

{
    title:"M T Vasudhevan Nair",
    picture:"/images/mt.jpg",
    genre:"India",
    author:"1933",
    books:"Naalukettu,Randamoozham"
},


];














app.get('/',(req,res)=>{
    res.render('index')
});
app.get('/login',(req,res)=>{
    res.render('login')
});


app.get('/reg',(req,res)=>{
    res.render('reg')
});

app.get('/authors',(req,res)=>{
    res.render("authors",writers)
});

app.get('/addbooks',(req,res)=>{
    res.render("addbooks")
});

app.listen(3500,()=>{
    console.log("server running on 3500")
});