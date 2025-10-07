// lib/mongodb.ts - Updated for your cluster
import { MongoClient, Db, ServerApiVersion } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

const uri = process.env.MONGODB_URI

// MongoDB client options with Stable API version (as provided by Atlas)
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

declare global {
  var _mongoClientPromise: Promise<MongoClient>
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to preserve the connection
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, create a new client
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise

// Database helper functions
export async function getDatabase(): Promise<Db> {
  const client = await clientPromise
  return client.db('cohound_app') // This will create the database if it doesn't exist
}

// Test connection function
export async function testConnection(): Promise<boolean> {
  try {
    const client = await clientPromise
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 })
    console.log("✅ Successfully connected to MongoDB Atlas!")
    return true
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error)
    return false
  }
}

// User model interface and class (unchanged)
export interface User {
  _id?: string
  email: string
  firstName?: string
  lastName?: string
  displayName?: string
  photoURL?: string
  phoneNumber?: string
  country?: string
  loginMethod: 'firebase' | 'google' | 'auth0'
  firebaseUID?: string
  auth0ID?: string
  createdAt: Date
  updatedAt: Date
  isActive: boolean
  lastLogin?: Date
}

export class UserModel {
  private static collection = 'users'

  static async createUser(userData: Partial<User>): Promise<User> {
    const db = await getDatabase()
    const now = new Date()
    
    const user: User = {
      ...userData,
      email: userData.email!,
      loginMethod: userData.loginMethod!,
      createdAt: now,
      updatedAt: now,
      isActive: true,
    } as User

    const result = await db.collection(this.collection).insertOne(user)
    return { ...user, _id: result.insertedId.toString() }
  }

  static async findUserByEmail(email: string): Promise<User | null> {
    const db = await getDatabase()
    const user = await db.collection(this.collection).findOne({ email })
    return user as User | null
  }

  static async findUserByFirebaseUID(firebaseUID: string): Promise<User | null> {
    const db = await getDatabase()
    const user = await db.collection(this.collection).findOne({ firebaseUID })
    return user as User | null
  }

  static async findUserByAuth0ID(auth0ID: string): Promise<User | null> {
    const db = await getDatabase()
    const user = await db.collection(this.collection).findOne({ auth0ID })
    return user as User | null
  }

  static async updateUser(email: string, updateData: Partial<User>): Promise<User | null> {
    const db = await getDatabase()
    const now = new Date()
    
    const result = await db.collection(this.collection).findOneAndUpdate(
      { email },
      { 
        $set: { 
          ...updateData, 
          updatedAt: now,
          lastLogin: now 
        } 
      },
      { returnDocument: 'after' }
    )

    return result as User | null
  }

  static async updateLastLogin(email: string): Promise<void> {
    const db = await getDatabase()
    await db.collection(this.collection).updateOne(
      { email },
      { $set: { lastLogin: new Date() } }
    )
  }

  static async deleteUser(email: string): Promise<boolean> {
    const db = await getDatabase()
    const result = await db.collection(this.collection).deleteOne({ email })
    return result.deletedCount === 1
  }
}