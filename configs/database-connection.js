const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_CONNECTION_URI)
.then((res) => console.log('MongoDB Database Connected !!'))
.catch((error) => console.log("Error throw connect the database: ", error));

module.exports = mongoose.connection;