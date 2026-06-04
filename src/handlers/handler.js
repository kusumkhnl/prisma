import prisma from "../db/prisma.js"


let FindAllStudents=async(req,res)=>{
    let allstudents=await prisma.students.findMany()

    res.json({
        message:"all student found",
        data:allstudents
    })

}

let FindStudentById=async(req,res)=>{
    let matchStudent=await prisma.students.findUnique({
        where:{
            id:Number(req.params.id),
        }

    })
    res.status(200).json({
        message:"student found",
        data:matchStudent
    })
}
let CreateStudent=async(req,res)=>{
    let data =req.body
    let CreateStudent=await prisma.students.create(
    {
        data:data
    }
    )
    res.status(201).json({
        message:"student created successfully",
        data:CreateStudent
    })}


let UpdateStudent=async(req,res)=>{
    let data= req.body
    let id =req.params.id
    let {name,email,roll_no}=req.body
    let UpdateStudent=await prisma.students.create({
      where:{
        id:Number(req.params.id)

      },
        data:{
            name,
            email,
            roll_no:roll_no,
    }
})
    res.status(201).json({
        message:"student update successfully",
        data:UpdateStudent

    })}


let DeleteStudent=async(req,res)=>{

}



export {FindStudentById,FindAllStudents,CreateStudent,UpdateStudent,DeleteStudent}