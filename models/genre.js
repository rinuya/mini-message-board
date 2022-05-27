var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
        name: { type: String, required: true, maxLength: 100, minlength: 3}
    }
);

//Virtual for genre URL
GenreSchema
.virtual("url")
.get(function () {
    return "catalog/genres/" + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);