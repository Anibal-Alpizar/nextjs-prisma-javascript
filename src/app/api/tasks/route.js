import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json("Creating a new task")
}