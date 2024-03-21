const express = require('express');

const router = express.Router();
const restController = require('../controllers/restController');
const  authMiddleware=require('../middleware/auth/authModdleware')



/**
 * @openapi
 * /api/TasksCreate:
 *   post:
 *     summary: Crear una nueva tarea
 *     description: Endpoint para crear una nueva tarea.
 *     tags:
 *       - Tarea
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         description: Token de acceso
 *         required: true
 *         schema:
 *           type: string
 *           default: 7PAPusdFBo1l6brUQokAl2XjaaBdLtp6RxGZRuBZcEa9SGUuVEXj1YaYPehmGvio
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - Description
 *             properties:
 *               title:
 *                 type: string
 *               Description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tarea creada exitosamente
 *       401:
 *         description: No autorizado
 *     x-code-samples:
 *       - lang: curl
 *         source: |
 *           curl -X 'POST' \
 *             'http://localhost:3000/api/TasksCreate' \
 *             -H 'Authorization: 7PAPusdFBo1l6brUQokAl2XjaaBdLtp6RxGZRuBZcEa9SGUuVEXj1YaYPehmGvio' \
 *             -H 'Content-Type: application/json' \
 *             -d '{
 *               "title": "Ejemplo de tarea",
 *               "Description": "Descripción de la tarea"
 *             }'
 */
router.post('/TasksCreate', authMiddleware, restController.createTask);
/**
 * @openapi
 * /api/getTasksAll:
 *   get:
 *     summary: Obtener todas las tareas
 *     description: Endpoint para obtener todas las tareas.
 *     tags:
 *       - Tarea
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         description: Token de acceso
 *         required: true
 *         schema:
 *           type: string
 *           default: 7PAPusdFBo1l6brUQokAl2XjaaBdLtp6RxGZRuBZcEa9SGUuVEXj1YaYPehmGvio
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida exitosamente
 *       401:
 *         description: No autorizado
 *     x-code-samples:
 *       - lang: curl
 *         source: |
 *           curl -X 'GET' \
 *             'http://localhost:3000/api/getTasksAll' \
 *             -H 'Authorization: 7PAPusdFBo1l6brUQokAl2XjaaBdLtp6RxGZRuBZcEa9SGUuVEXj1YaYPehmGvio' \
 *             -H 'accept: application/json'
 */


router.get('/getTasksAll', authMiddleware, restController.getAllItemsTask);

/**
 * @openapi
 * /api/getTasksbyid:
 *   get:
 *     summary: Obtener tarea por ID
 *     description: Endpoint para obtener una tarea por su ID.
 *     tags:
 *       - Tarea
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         description: Token de acceso
 *         required: true
 *         schema:
 *           type: string
 *           default: "7PAPusdFBo1l6brUQokAl2XjaaBdLtp6RxGZRuBZcEa9SGUuVEXj1YaYPehmGvio"
 *       - name: descripcion
 *         in: query
 *         description: Descripción de la tarea
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea encontrada exitosamente
 *       401:
 *         description: No autorizado
 *     x-code-samples:
 *       - lang: curl
 *         source: |
 *           curl -X 'GET' \
 *             'http://localhost:3000/api/getTasksbyid?descripcion=descripcion_de_ejemplo' \
 *             -H 'Authorization: Bearer 7PAPusdFBo1l6brUQokAl2XjaaBdLtp6RxGZRuBZcEa9SGUuVEXj1YaYPehmGvio' \
 *             -H 'Accept: application/json'
 */
router.get('/getTasksbyid', authMiddleware, restController.getTaskByDescripcion);




module.exports = router;
