import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

let client;
let clientPromise;

const { MONGODB_URI } = process.env;
const options = {};

if (!MONGODB_URI) {
  throw new Error("Please add MONGODB_URI to .env.local file");
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  var globalWithMongo = global;
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(MONGODB_URI, options);
  clientPromise = client.connect();
}

export default clientPromise;
