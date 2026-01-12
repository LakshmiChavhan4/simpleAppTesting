const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    console.log("Hello from DOCKER")
    res.send("Welcom to Github")
})

app.listen(8080,()=>{
    console.log(`Server is runnning on port 8080 and on Github`)
})