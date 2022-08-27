const { template } = require("../controllers");
// const validationUser = require("../middlewares");

const router = require("express").Router();
router.get("/", template.getAll);

module.exports = router;
