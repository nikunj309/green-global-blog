import mongoose from "mongoose";

// export async function connect() {
//     try {
//         await mongoose.connect(process.env.MONGO_URI!);
//         const connection =  mongoose.connection

//         connection.on('connected', () => {
//             console.log('MongoDB connected successfully');
//         })

//         connection.on('error', (err) => {
//             console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
//             process.exit();
//         })

//     } catch (error) {
//         console.log('Something goes wrong!');
//         console.log(error);
//     }
// }

type ConnctionObject = {
    isConnected?: number
}

const connection: ConnctionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log('Already connected to the database');
        return;

    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI || '', {
            
            bufferCommands: false, // Disable command buffering
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 30000,
        });

        connection.isConnected = db.connections[0].readyState;
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);

        // Graceful exit in case of a connection error
        process.exit(1);
    }
}

export default dbConnect;