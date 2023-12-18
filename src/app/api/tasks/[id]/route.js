import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma'

export async function GET(request, { params }) {
    const task = await prisma.task.findUnique({
        where: {
            id: +params.id
        }
    })
    return NextResponse.json(task)
}

export async function PUT(request, { params }) {
    const { title, description } = await request.json()
    const taskUpdated = await prisma.task.update({
        where: {
            id: +params.id
        },
        data: {
            title,
            description
        }
    })
    return NextResponse.json(taskUpdated)
}

export async function DELETE(request, { params }) {
    try {
        const tasksDeleted = await prisma.task.delete({
            where: {
                id: +params.id
            }
        })
        return NextResponse.json(tasksDeleted)
    } catch (_) {
        return NextResponse.json({ error: 'Task not found' }, { status: 404 })
    }
}
