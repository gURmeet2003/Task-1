import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>!! Hello !!</h1>');
})

const PORT = process.env.PORT || 8000;

app.get('/product',(req,res)=>{

    const product = [
        {
            Watch: "Titan",
            Price: 1000,
            Origin: "India",
        },
        {
            Watch: "Fastrack",
            Price: 300,
            Origin: "Russia",
        },
        {
            Watch: "Timex",
            Price: 20000,
            Origin: "America",
        },
        {
            Watch: "U.S Polo",
            Price: 200,
            Origin: "India",
        }
    ] 
    res.json(product);
})

app.get('/user',(req,res)=>{

    const user = [
        {
            Name: "Gurmeet",
            Age: 20,
            Origin: "India",
        },
        {
            Name: "Ram",
            Age: 22,
            Origin: "India",
        },
        {
            Name: "Sonu",
            Age: 20,
            Origin: "India",
        },
        {
            Name: "Krishna",
            Age: 19,
            Origin: "India",
        }
    ] 
    res.json(user);
})

app.listen(PORT,()=>{
   console.log(`server is running at http://localhost:${PORT}`);
})