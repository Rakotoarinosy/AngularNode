const router = require('express').Router();

const student_C = require('../controller/student');

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// Middleware recuperation Date du requete
router.use( (req, res, next) => {
    const event = new Date()
    console.log('lycee Time:', event.toString())
    next()
})

router.post('/addStudent', student_C.addStudent)
router.get('/', student_C.getStudent)


module.exports = router