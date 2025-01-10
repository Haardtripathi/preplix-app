

// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI!;

// if (!MONGODB_URI) {
//     throw new Error('Please define the MONGODB_URI environment variable inside .env');
// }

// let cached = (global as any).mongoose;

// if (!cached) {
//     cached = (global as any).mongoose = { conn: null, promise: null };
// }

// async function connectDB() {
//     if (cached.conn) {
//         return cached.conn;
//     }

//     if (!cached.promise) {
//         const opts = {
//             bufferCommands: false,
//         };

//         cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//             return mongoose;
//         });
//     }

//     try {
//         cached.conn = await cached.promise;
//     } catch (e) {
//         cached.promise = null;
//         throw e;
//     }

//     return cached.conn;
// }

// export default connectDB;

const mongoose = require("mongoose")

async function connectDB() {
    try {
        console.log("ABC")
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log("Mongodb error:", error)
    }
}

export default connectDB;



// // lib/dbConnect.js
// import mongoose from 'mongoose';

// const MONGO_URI = process.env.MONGO_URI;

// if (!MONGO_URI) {
//     throw new Error('Please define the MONGO_URI environment variable.');
// }

// let cached = global.mongoose;

// if (!cached) {
//     cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//     if (cached.conn) {
//         return cached.conn;
//     }

//     if (!cached.promise) {
//         const options = {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         };

//         cached.promise = mongoose.connect(MONGO_URI, options).then((mongoose) => mongoose);
//     }
//     cached.conn = await cached.promise;
//     return cached.conn;
// }

// export default dbConnect;
