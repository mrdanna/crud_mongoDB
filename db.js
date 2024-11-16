const mongoose = require(mongoose);

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://root:example@<container-name>:27017/', 
            {useNewUrlParser: true, 
                userUnifiedTopology: true
            });
            console.log("MongoDB Connected")
    }
    catch(error){
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;