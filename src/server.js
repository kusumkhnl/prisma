import express from"express"
import dotenv from "dotenv"
import studentRouter from"./routes/student_routes.js"

dotenv.config()
let app=express()
app.use(express.json())
app.use("/student",studentRouter)
let PORT =process.env.PORT||7777

app.get("/",(req,res)=>{
    res.json({
        message:"server initial routes called succesfully "
    })
})

app.listen(PORT,()=>{
    console.log("server started at port",PORT)

})