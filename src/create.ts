import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
    const createMany = await prisma.post.createMany({
        data : [
            {
                title : '1',
                content : "content",
                author : "x"
            },
            {
                title : '2',
                content : "content",
                author : "x"
            },
            {
                title : '3',
                content : "content",
                author : "x"
            }
        ]
    })
    console.log(createMany)
    const getData = await prisma.post.findMany()
    console.log(getData)
}

main()