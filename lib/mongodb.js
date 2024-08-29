// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URL; // Ensure this environment variable is set
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

if (!process.env.NEXT_PUBLIC_MONGODB_URL) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable to preserve the client across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, use a local variable to avoid global state pollution
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
