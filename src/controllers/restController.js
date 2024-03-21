
const path = require('path');
const TasksFilePath = path.join(__dirname, '../bd/Tasks.json');
const Task = require('../models/restModels')
const fs = require('fs');


exports.getAllItemsTask = async (req, res) => {

  try {
    //console.log("getAllItemssss", req.query);
    const fileContent = fs.readFileSync(TasksFilePath, 'utf8');
    const items = JSON.parse(fileContent);
    console.log(items);
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTask = async (req, res) => {
  var nuevaTask = new Task()
  let tasks = [];

  try {
    const { title, description, estado } = req.body;
    nuevaTask = {
      id: generateIdForTask(),
      title,
      description,
      fechaCreacion: new Date(),
      estado: estado
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


exports.getTaskByDescripcion = async (req, res) => {

  try {
    const title = req.query.title;
    let filter = []
    const fileContent = fs.readFileSync(TasksFilePath, 'utf8');
    const items = JSON.parse(fileContent);

    // Filtrar los elementos que coincidan con el título
    items.forEach(item => {
      if (item['title'] == title) {
        filter.push(item);
      }
    });

    // Función para ajustar la fecha de cada objeto en el filtro
    const ajustarFechas = (datos) => {
      return datos.map(objeto => {
        // Convertir la cadena de fecha en un objeto Date
        const fechaActual = new Date(objeto.fechaCreacion);
        // Restar 5 horas a la hora actual
        fechaActual.setUTCHours(fechaActual.getUTCHours() - 5);
        // Actualizar la propiedad "fechaCreacion" con la fecha ajustada
        objeto.fechaCreacion = fechaActual;
        return objeto;
      });
    };

    // Ajustar las fechas en el filtro
    filter = ajustarFechas(filter);

    // Ordenar el filtro por la última fecha y hora
    filter.sort((a, b) => {
      return b.fechaCreacion - a.fechaCreacion;
    });

    res.json(filter.slice(0, 1));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }


};

function generateIdForTask() {
  return Math.random().toString(36).substr(2, 9);
}
