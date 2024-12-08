import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

const pagination =async () => {
    const offsetData = await prisma.post.findMany({
        skip : 5,
        take : 2
    })

    console.log(offsetData)
    const cursorPagination = await prisma.post.findMany({
        skip : 5,
        take : 2,
        cursor : {
            id : 10
        }
    })

    console.log(cursorPagination)
    const sortedData = await prisma.post.findMany({
        orderBy : {
            id : 'desc'
        },
        where : {
            title : 'This'
        }
    })

    console.log(sortedData)
}

pagination()