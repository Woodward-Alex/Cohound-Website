// app/api/test-mongodb/route.ts
import { NextResponse } from 'next/server'
import { testConnection, getDatabase } from '@/lib/mongodb'

export async function GET() {
  try {
    // Test the connection
    const isConnected = await testConnection()
    
    if (!isConnected) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to connect to MongoDB' 
        },
        { status: 500 }
      )
    }

    // Get database info
    const db = await getDatabase()
    const collections = await db.listCollections().toArray()
    
    return NextResponse.json({
      success: true,
      message: 'Successfully connected to MongoDB Atlas!',
      database: 'cohound_app',
      collections: collections.map(col => col.name),
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('MongoDB test error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    )
  }
}