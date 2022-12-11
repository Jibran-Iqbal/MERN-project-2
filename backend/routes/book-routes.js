const express = require('express')
const router = express.Router()
const Book=require('../model/book')
const bookController = require('../controllers/book-controller')



router.get("/",bookController.getBooks);
router.post("/",bookController.addBook);
router.get("/:id",bookController.getById);
router.put("/:id",bookController.updateBook);
router.delete("/:id",bookController.deleteBook);

module.exports=router;