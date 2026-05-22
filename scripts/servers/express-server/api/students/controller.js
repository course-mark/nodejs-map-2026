const { createStudent, getStudents } = require('./service')

const getStudentController = (req, res) => {
    const students = getStudents()
    res.json(students)
}

const createStudentController = (req, res) => {
    createStudent(req.body)
    res.send("Student Created")

}




module.exports = {
    getStudentController,
    createStudentController
}