const express = require("express");
const app = express();
app.get('/', (req, res)=>{
    res.send("<h1> hello from node</h1>")
})
app.listen(3000,()=>{
    console.log("aapp is running port 3000");
    
})