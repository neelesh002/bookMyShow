/**
 * @swagger
 * definitions:
 *   Booking:
 *     type: object
 *     properties:
 *       movie:
 *         type: string
 *         description: The movie name
 *       seats:
 *         type: object
 *         description: The selected seats
 *       slot:
 *         type: string
 *         description: The time slot of the booking
 *       date_created:
 *         type: string
 *         format: date-time
 *         description: The date and time when the booking was created
 *
 *   BookingInput:
 *     type: object
 *     properties:
 *       movie:
 *         type: string
 *         description: The movie name
 *       seats:
 *         type: object
 *         description: The selected seats
 *       slot:
 *         type: string
 *         description: The time slot of the booking
 *     required:
 *       - movie
 *       - seats
 *       - slot
 */

/**
 * @swagger
 * /api/booking:
 *   get:
 *     summary: Get last booking
 *     description: Retrieve a last booking
 *     responses:
 *       200:
 *         description: Get last booking
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Booking'
 *       404:
 *         description: No previous booking found
 *       500:
 *         description: Internal Server Error
 *
 *   post:
 *     summary: Create a new booking
 *     description: Create a new movie booking
 *     parameters:
 *       - in: body
 *         name: booking
 *         description: The booking object to be created
 *         required: true
 *         schema:
 *           $ref: '#/definitions/BookingInput'
 *     responses:
 *       201:
 *         description: The created booking
 *         schema:
 *           $ref: '#/definitions/Booking'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal Server Error
 */
