const router = require("express").Router();
const tonKhoController = require("../app/controllers/tonkho.controller");
const authMiddleware = require("../app/middlewares/auth.middleware");

router.post(
  "/tongtonkho",
  authMiddleware.verifyToken,
  tonKhoController.getTotalInventory
);
router.post(
  "/tonchitiet",
  authMiddleware.verifyToken,
  tonKhoController.getDetailInventory
);
router.post(
  "/tontheokho",
  authMiddleware.verifyToken,
  tonKhoController.getInventoryOnStore
);

module.exports = router;
