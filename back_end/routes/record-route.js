const { Router } = require("express");
const { getAllRecord, getInfo,getChartInfo } = require("../controllers/record_controller");

const router = Router();

router.route("/info").get(getInfo);
router.route("/").get(getAllRecord);
router.route("/chart").get(getChartInfo);

module.exports = router;
