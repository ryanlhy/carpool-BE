const express = require("express");
const router = express.Router();
const {
  usersController,
  ridesController,
  reviewsController,
} = require("../controllers");

// users routes
router.get("/users", usersController.getAll);
router.get("/users/:id", usersController.getById);
router.post("/users", usersController.create);
router.put("/users/:id", usersController.update);
router.delete("/users/:id", usersController.delete);

// rides routes
router.get("/rides", ridesController.getAll);
router.get("/rides/:id", ridesController.getById);
router.post("/rides", ridesController.create);
router.put("/rides/:id", ridesController.update);
router.delete("/rides/:id", ridesController.delete);

// reviews routes
router.get("/reviews", reviewsController.getAll);
router.get("/reviews/:id", reviewsController.getById);
router.post("/reviews", reviewsController.create);
router.put("/reviews/:id", reviewsController.update);
router.delete("/reviews/:id", reviewsController.delete);

module.exports = router;
