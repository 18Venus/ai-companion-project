import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function PATCH(req: Request,
    {params}:{params:{companionId:string}}
){
    try{
        const body= await req.json();
        const user=await currentUser();
        const{ src, name, description,instruction,seed,categoryId} =body;
        if(!user||!user.id||!user.firstName){
            return new NextResponse("Unauthorized",{status:401});
        }
        if(!src||!name||!description||!instruction||!seed||!categoryId){
            return new NextResponse("Missing required fields",{status:400});
        }

        if(!params.companionId){
            return new NextResponse("Companion ID is required", {status:400});
        }

        //todo: check subs

        const companion= await prisma.companion.update({
            where :{
                id: params.companionId,
            },
            data:{
               categoryId,
               userId: user.id,
               userName:user.firstName,
               src,
               name,
               description,
               instruction,
               seed
            }
        });

        return NextResponse.json(companion);

    } catch(error){
        console.log("[COMPANION_PATCH]", error);
        return new NextResponse("Internal Error")
    }
}