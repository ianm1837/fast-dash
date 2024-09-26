import { NextResponse } from 'next/server'

const fs = require('fs').promises
const path = require('path')
const process = require('process')

export async function GET(request) {
    try{
        const filePath = path.join(process.cwd(), 'data/config.json')
        const data = await fs.readFile(filePath, 'utf-8')
        return Response.json(JSON.parse(data))
    }
    catch (error){
        console.log("error: ", error)
        return Response.json({error: error})
    }
}

export async function POST(request) {
    const body = await request.json()
    console.log("body", body)

    return NextResponse.json({  }, { status: 200    })
}