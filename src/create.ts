import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
    const createUser = await prisma.user.create({
        data : {
            userName : 'userName2',
            email : "bahu@gmail2.com",
            role : UserRole.user
        }
    })
    console.log(createUser)
}

main()