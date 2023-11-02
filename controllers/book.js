const Books = require("../models/book");
const Author=require("../models/auteur");
const Category=require("../models/category");
const fetchBooks = (req, res) => {
  //  console.log(req.params.duration)
  //  res.send(req.params.duration)
  Books.find()
    .populate("auteur")
    .populate("categories")
    .then((books) =>
      res.status(200).json({
        model: books,
        message: "success!",
      })
    )
    .catch(() => {
      res.status(400).json({
        error: Error.message,
        message: "probleme d'extraction des livres ! ",
      });
    });
};
// const addBook = (req, res) => {
//   const book = new Books(req.body);
//   book
//     .save()
//     .then(() => {
//       res.status(201).json({
//         models: book,
//         message: "book cree!",
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         error: error.message,
//         message: "Donnee invalides",
//       });
//     });
// };

const getBookByid = (req, res) => {
  Books.findOne({ _id: req.params.id })
    .populate("auteur")
    .populate("categories")
    .then((book) => {
      if (!book) {
        res.status(404).json({
          message: "livre non trouvé!",
        });
      } else {
        res.status(200).json({
          model: book,
          message: "livre trouvé!",
        });
      }
    })
    .catch(() => {
      res.status(400).json({
        error: Error.message,
        message: "Données invalides!",
      });
    });
};

const updateBook = (req, res) => {
  Books.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    (book) => {
      if (!book) {
        res.status(404).json({
          message: "book non trouvé!",
        });
      } else {
        res.status(200).json({
          model: book,
          message: "book modifié!",
        });
      }
    }
  );
};

const deleteBook = (req, res) => {
  console.log(req.params.id);
  res.send("delete");
};

const deleteBookByid = (req, res) => {
  Books.deleteOne({ _id: req.params.id })
    .then((Book) =>
      res.status(200).json({
        message: "success!",
      })
    )
    .catch(() => {
      res.status(400).json({
        error: Error.message,
        message: "probleme d'extraction ",
      });
    });
};

const addBook=async (req, res) => {
  const book = new Books(req.body);
  book
    .save()
    .then(() => {
      res.status(201).json({
        models: book,
        message: "book cree!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error.message,
        message: "Donnee invalides",
      });
    });
};






module.exports = {
  fetchBooks: fetchBooks,
  addBook: addBook,
  getBookByid: getBookByid,
  updateBook: updateBook,
  deleteBook: deleteBook,
  deleteBookByid: deleteBookByid,
};
