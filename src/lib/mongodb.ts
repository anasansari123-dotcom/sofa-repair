import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/tanseer";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache ?? { conn: null, promise: null };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

function assertProductionUri() {
  if (process.env.NODE_ENV !== "production") return;

  if (!process.env.MONGODB_URI) {
    throw new Error(
      "MONGODB_URI is missing. Set a MongoDB Atlas connection string in Vercel Environment Variables."
    );
  }

  if (
    process.env.MONGODB_URI.includes("localhost") ||
    process.env.MONGODB_URI.includes("127.0.0.1")
  ) {
    throw new Error(
      "MONGODB_URI points to localhost, which cannot work on Vercel. Use MongoDB Atlas."
    );
  }
}

export async function connectDB() {
  assertProductionUri();

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}
