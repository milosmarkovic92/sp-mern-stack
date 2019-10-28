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
  gender: {
    type: String
  },
  age: {
    type: Number
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
    type: String
  }
});

const Character = mongoose.model("character", CharacterSchema);

module.exports = Character;
