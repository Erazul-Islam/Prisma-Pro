import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const deleteData = async () => {
        // const deleteData = await prisma.post.delete({
        //     where : {
        //         id : 1
        //     }
        // })
        // console.log(deleteData)
        const deleteData = await prisma.post.deleteMany({
            where : {
                title : "1"
            }
        })
        console.log(deleteData)
}
deleteData()