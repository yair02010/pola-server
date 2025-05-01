    const express = require("express");
    const router = express.Router();
    const {
    getWishlist,
    toggleWishlist,
    getAllUsers,
    removeFromWishlist
    } = require("../controllers/userController");
    const auth = require("../middlewares/authMiddleware");
    const admin = require("../middlewares/adminMiddleware");

    router.get("/all", auth, admin, getAllUsers);

    router.get("/wishlist", auth, getWishlist);
    router.post("/wishlist", auth, toggleWishlist);
    router.delete("/wishlist/:productId", auth, removeFromWishlist);
    module.exports = router;
