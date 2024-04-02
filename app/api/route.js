import { NextResponse } from 'next/server'
import jobsData from './mocks/jobs.json'

export async function GET(Request) {
    return NextResponse.json(jobsData)
}