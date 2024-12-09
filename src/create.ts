import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
    const createUser = await prisma.post.create({
        data : {
           title : "This is title",
           content : "This is content",
           authorId : 3,
           PostCategory : {
                create : [
                    {
                        categoryId : 1
                    },
                    {
                        categoryId : 3
                    }
                ]
           }
        }
    })
    console.log(createUser)
}

main()