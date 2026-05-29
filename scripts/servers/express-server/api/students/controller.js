const { createStudent, getStudents } = require('./service.db')

const getStudentController = async (req, res) => {
    const students = await getStudents()
    res.json(students)
}

const createStudentController = async (req, res) => {
    const dataStudent = req.body
    const student = await createStudent(dataStudent)
    res.json(student)
}




module.exports = {
    getStudentController,
    createStudentController
}