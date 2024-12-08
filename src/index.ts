import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
    // const result = await prisma.post.create({
    //     data : {
    //         title : "This is Rab",
    //         content : "Content",
    //         author : "Taosif"
    //     }
    // })

    // console.log(result)

    const getData = await prisma.post.findMany()
    console.log(getData)
}

main()