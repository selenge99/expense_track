const { Router } = require("express");
const {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/record_controller");

const router = Router();

router.route("/").get(getAllRecord);

module.exports = router;
