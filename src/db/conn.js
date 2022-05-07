const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/healthcareapplication",{
    //useNewUrlParser:true,
    //useUnifiedTopology:true,
    //useFindAndModify:true,
    //useCreateIndex:true
}).then(()=>console.log("connection successful")).catch((err)=>console.log("no connection")); 
