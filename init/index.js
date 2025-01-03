const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main()
{
    await mongoose.connect(MONGO_URL);
}

main()
.then((res)=>{
    console.log("Conneced to DB");
})
.catch((err)=>{
    console.log(err);
});

const initDB = async () => {
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj)=>({...obj,owner:"66b6169935224962adce77e8"})); //Insert new property "owner"
    await Listing.insertMany(initdata.data);
    console.log("Data was initialized");
}

initDB();
