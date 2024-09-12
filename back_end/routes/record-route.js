const { Router } = require("express");
const {
  getAllRecord,
  getInfo,
  getChartData,
} = require("../controllers/record_controller");
// const { auth } = require("../middlewares/auth");

const router = Router();

router.route("/info").get(getInfo);
router.route("/chart").get(getChartData);
router.route("/").get(getAllRecord);

module.exports = router;
