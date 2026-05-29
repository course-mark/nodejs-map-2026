const mongoose = require('mongoose');
const Students = require('../../db/models/Students')

const createStudent = async (dataStudent) => {
    const student = new Students(dataStudent)
    return await student.save()
}

const getStudents = async ()=>{
    return await Students.find().exec()
}

module.exports = {
    createStudent,
    getStudents
}