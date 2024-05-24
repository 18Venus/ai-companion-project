const {PrismaClient} = require("@prisma/client");

const db=new PrismaClient();

async function main(){
    try{
        await db.category.createMany({
            data:[
                {name: "Cartoons"},
                {name: "Animals"},
                {name: "Princesses"},
                {name: "Supherheroes"},
                {name: "Games"},
                {name: "Movies & TV"}
                
            ]
        })
    } catch(error){
        console.error("Error seeding default categories", error);
    } finally{
        await db.$disconnect();
    }
};

main();