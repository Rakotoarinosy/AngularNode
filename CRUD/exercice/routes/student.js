const router = require('express').Router();

const student_C = require('../controller/student');

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// Middleware recuperation Date du requete
router.use( (req, res, next) => {
    const event = new Date()
    console.log('student Time:', event.toString())
    next()
})

router.post('/addStudent', student_C.addStudent)
router.get('/', student_C.getAllStudent)
router.get('/:id', student_C.getStudent)
router.put('/updateStudent/:id', student_C.updateStudent)
router.delete('/deleteStudent/:id', student_C.deleteStudent)


module.exports = router