const { PrismaClient } = require('@prisma/client');

const { RequestError } = require('../error/customError');

const prisma = new PrismaClient();

exports.addStudent = async (req, res, next) => {
    console.log("tafiditra")
    console.log(req.body.name)
    try {

        const newStudent = {
            name: req.body.name,
            course: req.body.course,
            fee: req.body.fee
        }

        console.log(newStudent)

        const student = await prisma.student.create({
            data: newStudent
        })
        
        res.json(student)

    } catch (error) {
        next(error)
    }
}

exports.getStudent = async (req, res, next) => {
    try {
        const students = await prisma.student.findMany({})

        res.json(students)
    } catch (error) {
        next(error)
    }
}