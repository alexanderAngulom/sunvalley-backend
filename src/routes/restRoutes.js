const express = require('express');

const router = express.Router();
const restController = require('../controllers/restController');
const  authMiddleware=require('../middleware/auth/authModdleware')

/**
 * @openapi
 * /api/TasksCreate:
 *   post:
 *     description: Servicio obtener citas
 *     tags:
 *       - Task
 *     parameters:
 *      - name: datos
 *        in: body
 *        schema:
 *          type: object
 *          required:
 *            - title
 *            - Description
 *          properties:
 *            title:
 *              type: string
 *            Description:
 *              type: string         
 *      - name: Authorization
 *        in: header
 *        description: Token de acceso
 *        required: true
 *        value: 7PAPusdFBo1l6brUQokAl2XjaaBdLtp6RxGZRuBZcEa9SGUuVEXj1YaYPehmGvio
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Ok
 */
router.post('/TasksCreate', authMiddleware,restController.createTask);



router.get('/getTasksAll',authMiddleware,restController.getAllItemsTask)

module.exports = router;
