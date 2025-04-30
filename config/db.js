    const mongoose = require("mongoose");

    const connectDB = async () => {
    try {
        const mongoUri =
        process.env.NODE_ENV === "production"
            ? process.env.MONGO_ATLAS_URI
            : process.env.MONGO_LOCAL_URI;

        await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 10000, 
        });

        console.log("✅ MongoDB connected");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err.message);
        process.exit(1);
    }
    };

    module.exports = connectDB;
