import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
    
    const getData = await prisma.post.findMany()
    console.log(getData)
}

main()