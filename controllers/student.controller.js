
const studentModel = require('../model/student.model');
//function to find all the students
async function getStudents(req, res) {
    try {
        const students = await studentModel.find({});
        
        if(students){
            res.status(200).json(students);
        }
        else{
            res.status(400).json({message:"No Students Found"})
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//function to find a student with a particular id

async function getStudentsWithId(req, res) {
    try {
        const { id } = req.params;
        const student = await studentModel.findById(id);
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: `Student with the id: ${id} not found` });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//function to add students into the database

async function addStudents(req, res) {
    try {
        const { _id, name, email, password } = req.body;
        const student = await studentModel.create({
            _id,
            name,
            email,
            password
        });
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//function to update a particular student

async function updateStudents(req, res) {
    try {
        const { id } = req.params;
        const student = await studentModel.findByIdAndUpdate(id, req.body, { new: true });
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: `Student with the id: ${id} not found` });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//function to delete a particular student

async function deleteStudents(req, res) {
    try {
        const { id } = req.params;
        const student = await studentModel.findByIdAndDelete(id);
        if (student) {
            res.status(200).json({ message: `Student with id: ${id} deleted successfully` });
        } else {
            res.status(404).json({ message: `Student with the id: ${id} not found` });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getStudents, getStudentsWithId, addStudents, updateStudents, deleteStudents };
