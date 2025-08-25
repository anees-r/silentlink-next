import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number,
}

const connection: ConnectionObject = {}

const dbConnect = async (): Promise<void> => {
    if (connection.isConnected) {
        console.log("Database Connection Already Exists");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '')

        connection.isConnected = db.connections[0].readyState;

        console.log("Database Connected Successfully")

    } catch (error) {
        console.log("Error Connecting to Database: ", error)

        process.exit(1);
    }
}

export default dbConnect;