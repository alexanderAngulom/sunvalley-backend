
const path = require('path');
const TasksFilePath = path.join(__dirname, '../bd/Tasks.json');
const Task = require('../models/restModels')
const fs = require('fs');


exports.getAllItemsTask = async (req, res) => {

  try {
    //console.log("getAllItemssss", req.query);
    const fileContent = fs.readFileSync(TasksFilePath, 'utf8');
    const items = JSON.parse(fileContent);
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTask = async (req, res) => {
  var nuevaTask = new Task()
  let tasks = [];

  try {
    const { title, description } = req.body;
    nuevaTask = {
      id: generateIdForTask(),
      title,
      description,
      fechaCreacion: new Date(),
      estado: 'off'
    };
    
    const fileContent = fs.readFileSync(TasksFilePath, 'utf8');
    tasks = JSON.parse(fileContent);

    if (!Array.isArray(tasks)) {
        tasks = [];
    }

    tasks.push(nuevaTask);

    fs.writeFileSync(TasksFilePath, JSON.stringify(tasks, null, 2));

    res.status(201).json({ message: 'success Task create', Task: nuevaTask });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la Task', error: error.message });
  }
};

function generateIdForTask() {
  return  Math.random().toString(36).substr(2, 9);
}
