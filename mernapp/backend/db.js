const mongoose = require('mongoose');
//const mongoURI = 'mongodb+srv://gofood:ezaJPqW1DO5us@cluster0.7jvyxpl.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongoURI = 'mongodb://gofood:ezaJPqW1DOgrt5us@ac-h4fpuz4-shard-00-00.7jvyxpl.mongodb.net:27017,ac-h4fpuz4-shard-00-01.7jvyxpl.mongodb.net:27017,ac-h4fpuz4-shard-00-02.7jvyxpl.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-rtrp7c-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB = async() =>{
    try{
    await mongoose.connect(mongoURI);
    console.log("connected succesfully");
    let fetched_data = mongoose.connection.db.collection("food_items");
     let data = await fetched_data.find({}).toArray()
      console.log(data);
    } catch (error){
        console.log('err', error);
    }
            
 };

module.exports = mongoDB; //yaha pr isko call nhi karna hai export krna hai isliye paranthesis use nhi kiya hai.