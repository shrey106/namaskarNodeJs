const express = require ('express')
const app = express ()

app.set ('view engine','ejs')





app.get('/', (req,res)=>{
    const name = "Shrey koirala"
    const address = "Biratnagar"
   res.render ('home.ejs',{data:name , address:address})
})
 
app.get('/about',(req,res)=>{
    res.render ('about.ejs')
})


app.listen (3000 , ()=>{
    console.log ( " The project has started at port 3000")
})

