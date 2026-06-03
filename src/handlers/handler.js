import prisma from "../db/db.js"


let FindAllStudents=async(req,res)=>{
    let allstudents=await prisma.FindMany()

    res.json({
        message:"all student found",
        data:allstudents
    })

}

let FindStudentById=async(req,res)=>{}
let CreateStudent=async(req,res)=>{}
let UpdateStudent=async(req,res)=>{}
let DeleteStudent=async(req,res)=>{}

export {FindStudentById,FindAllStudents,CreateStudent,UpdateStudent,DeleteStudent}