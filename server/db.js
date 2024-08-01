const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://ravleen2358be21:qsmSX8N7pRT8YiE3@cluster0.qbzvd4v.mongodb.net/goFoodMern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");

        const fetched_data = await mongoose.connection.db.collection("sample").find({}).toArray();
        const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
        const userData = await mongoose.connection.db.collection("users").find({}).toArray();
        const packageData = await mongoose.connection.db.collection("packages").find({}).toArray();
        const couponData=await mongoose.connection.db.collection("offers").find({}).toArray();

        global.food_items = fetched_data;
        global.foodCategory = foodCategory;
        global.userData = userData;
        global.couponData=couponData;
        global.packageData=packageData;

        // console.log(global.food_items);
        // console.log(userData);
        console.log(couponData);
        console.log(packageData);
    } catch (err) {
        console.log("Error connecting to MongoDB: ", err);
    }
}

module.exports = mongoDB;
