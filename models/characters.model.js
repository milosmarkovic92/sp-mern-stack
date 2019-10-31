const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name field is required!"],
    minlength: 3
  },
  lastName: {
    type: String,
    required: [true, "Last name field is required!"],
    minlength: 3
  },
  picture: {
    type: String,
    required: [true, "Picture field is required!"]
  },
  age: {
    type: Number,
    required: [true, "Age field is required!"]
  },
  occupation: {
    type: String,
    required: [true, "The occupation field is required!"],
    minlength: 3
  },
  relatives: {
    father: {
      type: String
    },
    mother: {
      type: String
    },
    brother: {
      type: String
    },
    sister: {
      type: String
    }
  },
  quote: {
    type: String,
    required: [true, "Quote field is required!"]
  }
});

const Character = mongoose.model("character", CharacterSchema);

module.exports = Character;
