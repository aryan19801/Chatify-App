
import mongoose from 'mongoose'

// const db=async()=>{
// 	console.log(process.env.MONGO_URI,"LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL")
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log("MongoDB connected");
// }).catch((err) => {
//   console.log("Error connecting to MongoDB", err);
// });
// }

const connectDb = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log("Connected Mongoose:", conn.connection.host);
	}
	catch (error) {
		console.log("Error in connecting MongoDb", error);
	}
}

export default connectDb;