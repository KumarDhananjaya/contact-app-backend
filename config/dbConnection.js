const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected: ");
        console.log("Host:", connect.connection.host );
        console.log("Name:", connect.connection.name );

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb;