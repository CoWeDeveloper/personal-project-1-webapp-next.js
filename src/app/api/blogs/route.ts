import prisma from "@/lib/prisma";
import { Description } from "@radix-ui/react-toast";

// API route to handle creating a new blog post
export default async function handler(req : any, res: any){

if(req.method == "GET"){
    try{
        const posts = await prisma.post.findMany();
        res.status(200).json(posts);

    }catch (error) {
        res.status(500).json({ error: "Error fetching posts" });
      }
}

if(req.method == "POST"){
    const {author, title,  subDescripation, content, bgImg}= req.body;
    try{
        const newPost = await prisma.post.create({
            data:{
                title,
                author,
                subDescripation: subDescripation,
                content,
                bgImg
            },
        });
        res.status(201).json(newPost);
    }catch(error){
        res.status(500).json({error: "Error Creating Post"})
    }
} else if (req.method == "PUT"){
    const {author, title,  subDescripation, content, bgImg}= req.body;
    try{
       const updatedPost = prisma.post.update({
        data:{
            title,
            author,
            subDescripation: subDescripation,
            content,
            bgImg
        },
       });
       res.status(200).json(updatedPost);
    }catch(error){
        res.status(500).json({error: "Error in Updating Post"}) 
    }
}


}