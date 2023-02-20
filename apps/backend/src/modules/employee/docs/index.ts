/**
 * @swagger
 * /employee:
 *   post:
 *     description: Add employee
 *     tags: [employee]
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: request body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *            firstName:
 *              type: string
 *              required: true
 *              default: 'Jerome'
 *            lastName:
 *              type: string
 *              required: true
 *              default: 'Edwards'
 *            email:
 *              type: string
 *              required: true
 *              default: 'test@gmail.com'
 *            phone:
 *              type: string
 *              required: true
 *              default: '+94123456789'
 *            gender:
 *              type: string
 *              required: true
 *              default: 'm'
 *
 *     responses:
 *       200:
 *         description: Add employee success.
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /employee/{employeeId}:
 *   put:
 *     description: Update employee
 *     tags: [employee]
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: employeeId
 *         required: true
 *         schema:
 *           type: string
 *           require: true
 *
 *       - in: body
 *         name: request body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *            firstName:
 *              type: string
 *              required: true
 *              default: 'Jerome'
 *            lastName:
 *              type: string
 *              required: true
 *              default: 'Edwards'
 *            email:
 *              type: string
 *              required: true
 *              default: 'test@gmail.com'
 *            phone:
 *              type: string
 *              required: true
 *              default: '+94123456789'
 *            gender:
 *              type: string
 *              required: true
 *              default: 'm'
 *
 *     responses:
 *       200:
 *         description: Add employee success.
 *       400:
 *         description: Bad Request.
 *       404:
 *         description: Employee not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /employee:
 *   get:
 *     description: Get employees with with pagination
 *     tags: [employee]
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: page
 *         required: true
 *         schema:
 *           type: number
 *       - in: query
 *         name: limit
 *         required: true
 *         schema:
 *           type: number
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *       - in: query
 *         name: firstName
 *         schema:
 *           type: string
 *       - in: query
 *         name: lastName
 *         schema:
 *           type: string
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *       - in: query
 *         name: phone
 *         schema:
 *           type: string
 *       - in: query
 *         name: gender
 *         schema:
 *           type: string

 *     responses:
 *       200:
 *         description: Get employees success.
 *       400:
 *         description: Bad Request.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /employee/{employeeId}:
 *   get:
 *     description: Get employees with pagination
 *     tags: [employee]
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: employeeId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Get employee success.
 *       400:
 *         description: Bad Request.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /employee/{employeeId}:
 *   delete:
 *     description: Delete employee
 *     tags: [employee]
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: employeeId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Delete employee success.
 *       400:
 *         description: Bad Request.
 *       404:
 *         description: Employee not found.
 *       500:
 *         description: Internal server error.
 */
