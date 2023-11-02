const express = require("express");
const router = express.Router();
const Book = require("../models/book");
const BookController = require("../controllers/book");
//find tout
router.get("/", BookController.fetchBooks);

//find by id
router.get("/:id" ,BookController.getBookByid);

router.post("/" ,BookController.addBook);

router.patch("/:id" ,BookController.updateBook);

router.delete("/:id" ,BookController.deleteBook);

router.delete("/delete/:id" ,BookController.deleteBookByid);

module.exports = router;
