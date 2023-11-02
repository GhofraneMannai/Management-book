const mongoose = require("mongoose");
const author = require("./auteur")
const categories = require("./category")
const bookSchema = mongoose.Schema({
    title: { type: String,required:true},
    ISBN : { type: String,required:true},
    description: { type: String,required:true},
    date_of_publication: { type: Date,required:true},
    number_page: { type: Number,required:true},
    language : { type: String,required:true},
    auteur:{type: mongoose.Schema.Types.ObjectId,ref:author},
    categories:[{type: mongoose.Schema.Types.ObjectId,ref:categories}]
 })

module.exports = mongoose.model("Book", bookSchema);