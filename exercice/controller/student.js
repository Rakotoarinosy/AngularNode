const { PrismaClient } = require('@prisma/client');

const { RequestError } = require('../error/customError');

const prisma = new PrismaClient();

exports.addStudent = async (req, res, next) => {
    try {
        const newStudent = {
            name: req.body.name,
            course: req.body.course,
            fee: parseInt(req.body.fee)
        }

        const student = await prisma.student.create({
            data: newStudent
        })

        console.log(student)
        
        res.json({data: student})

    } catch (error) {
        next(error)
    }
}

exports.getAllStudent = async (req, res, next) => {
    try {
        const students = await prisma.student.findMany({})

        res.json({data :students})
    } catch (error) {
        next(error)
    }
}

exports.getStudent = async (req, res, next) => {
    try {
        const studentId = parseInt(req.params.id)

        if(!studentId) {
            throw new RequestError('Missing this parameter')
        }

        const student = await prisma.student.findUnique({
            where: {
                id : Number(studentId)
            }
        })
        res.json({data : student})
    } catch (error) {
        next(error)
    }
}

exports.updateStudent = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)

        if (!id) {
            res.status(400).json({msg:"Missing this parameter"})
            return;
        }

        const studentId = await prisma.student.findMany({
            where: {
                id: id
            }
        })

        if (studentId.length === 0) {
            //res.status(400).json({msg:"Missing this parameter"})
            res.status(404).json({msg:"Student not found"}) // 404 - Not Found semble plus approprié
            return; 
        }

        const student = await prisma.student.update({
            data: req.body,
            where: {
                id: Number(id)
            }
        })

        res.json({data : student})

    } catch (error) {
        next(error)
    }
}

exports.deleteStudent = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)

        if (!id) {
            res.status(400).json({msg:"Missing this parameter"})
        }

        const student = await prisma.student.delete({
            where: {
                id: Number(id)
            }
        })

        res.json({data : student})
        
    } catch (error) {
        next(error)
    }
}