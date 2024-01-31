import mongoose, { mongo } from "mongoose";
const connection = {};

async function connectDb() {

  if (connection.isConnected) {
    console.log("이미 데이터베이스에 연결되었습니다.");
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("연결된 데이터베이스를 유지합니다.");
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("데이터베이스를 새롭게 연결합니다.");
  connection.isConnected = db.connections[0].readyState;
}

async function disconnectDb() {
  if (connection.isConnected) {
    if (process.env.NODE_END === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not diconnecting from the database.");
    }
  }
}

const db = { connectDb, disconnectDb };

export default db;
