const router = require("express").Router();
const charactersController = require("../controllers/characters.controller");

// route for getting all characters from database
router.get("/characters", charactersController.index);

// route for adding new character to database
router.post("/characters", charactersController.create);

// route for updating single character
router.put("/characters/:id", charactersController.update);

// route for deleting single character from database
router.delete("/characters/:id", charactersController.remove);

module.exports = router;
