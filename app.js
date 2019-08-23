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

{
    title:"Paulo Cohelo",
    picture:"/images/palo.jpg",
    genre:"Brazil",
    author:"1947",
    books:"Alchemist"
},

{
    title:"Dan Brown",
    picture:"/images/dan.jpg",
    genre:"America",
    author:"1964",
    books:"	Digital Fortress,Angels & Demons"
},





];


book12 =[
    {
      title:"Lord of the Rings",
      picture:"/images/4.jpg",
      genre:"Adventure",
      author:"JRR Tolkien",
      books:"lord of the rings,Hobbit.."
},

{
    title:"Harry Potter",
    picture:"/images/8.jpg",
    genre:"Fiction",
    author:"JK Rowling",
    books:"Harry Potter series"
},

{
    title:"Wings of fire",
    picture:"/images/wings.jpg",
    genre:"Autobiograohy",
    author:"APJ Abdul Kalam",
    books:"wings of fire"
},

{
    title:"Randamoozham",
    picture:"/images/11.jpg",
    genre:"Religous and Myth",
    author:"M T Vasudhevan Nair",
    books:"Naalukettu,Randamoozham"
},

{
    title:"Alchemist",
    picture:"/images/10.jpg",
    genre:"Story",
    author:"Paulo Cohelo",
    books:""
},
{
    title:"Da Vinci code",
    picture:"/images/2.jpg",
    genre:"Mystery, Detective fiction",
    author:"Dan Brown",
    books:""
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

app.get('/book',(req,res)=>{
    res.render("book",book12)
});


app.get('/addbooks',(req,res)=>{
    res.render("addbooks")
});

app.listen(process.env.PORT||3500,()=>{
    console.log("server running on 3500")
});