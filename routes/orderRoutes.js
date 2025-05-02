    const express = require("express");
    const router = express.Router();

    const {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrderStatus,
    getMyOrders
    } = require("../controllers/orderController");

    const auth = require("../middlewares/authMiddleware");
    const admin = require("../middlewares/adminMiddleware");

    router.post("/", auth, createOrder);
    router.get("/", auth, admin, getAllOrders);
    router.get("/my-orders", auth, getMyOrders);
    router.get("/:id", auth, getOrderById);
    router.put("/:id/status", auth, admin, updateOrderStatus);

    module.exports = router;
