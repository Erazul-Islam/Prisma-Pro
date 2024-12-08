import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
        // const updateSingle = await prisma.post.update({
        //     where : {
        //         id : 1
        //     },
        //     data : {
        //         title : "tttx",
        //         content : "something"
        //     }
        // })
        // console.log(updateSingle)

        const updateMany = await prisma.post.updateMany({
            where : {
                title : '2'
            },
            data : {
                title : "update titile"
            }
        })
        console.log(updateMany)
}

main()