const Character = require("../models/characters.model");

module.exports.index = (req, res, next) => {
  Character.find({})
    .then(character => {
      res.send(character);
    })
    .catch(next);
};

module.exports.show = (req, res, next) => {
  Character.findOne({ _id: req.params.id })
    .then(character => {
      res.send(character);
    })
    .catch(next);
};

module.exports.create = (req, res, next) => {
  Character.create(req.body)
    .then(character => {
      res.send(character);
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Character.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      Character.findOne({ _id: req.params.id }).then(character => {
        res.send(character);
      });
    })
    .catch(next);
};

module.exports.remove = (req, res, next) => {
  Character.findByIdAndRemove({ _id: req.params.id })
    .then(character => {
      res.send(character);
    })
    .catch(next);
};

module.exports.search = (req, res, next) => {
  if (req.query.search) {
    const regex = new RegExp(escapeRegex(req.query.search), "gi");

    Character.find({
      $or: [{ firstName: regex }, { lastName: regex }]
    })
      .then(characters => {
        res.status(200).send(characters);
      })
      .catch(next);
  }
};

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
