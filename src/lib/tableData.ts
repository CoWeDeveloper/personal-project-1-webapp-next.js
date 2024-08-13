import { Content } from "next/font/google";

export const tableData = [
    {
        id: "1",
        bgImg: "/assets/images/Blogs/b1.webp",
        title: "Redefining-Flexibility-For-Media-and-Entertainment-Companies",
        subDescripation: "This is the subtitle of the first blog. It is just an example to preview the text. This text is written to show how to will look like on computer",
        content: "This is  the body paragraph with preview infomration and so user can able to see and read lastest blogs on time. This text is dummy and just want to show how much it could render in computer screen with examples",
        optionalImage: "/assets/images/Blogs/blogHeader.webp",
        date:"April 10,2024",
    },
    {
        id: "2",
        bgImg: "/assets/images/Blogs/b2.webp",
        title: "Slack-Cost-With-Multicloud-Data-Protection-Solutions",
        subDescripation: "This is the subtitle of the first blog. It is just an example to preview the text. This text is written to show how to will look like on computer",
        content: "This is  the body paragraph with preview infomration and so user can able to see and read lastest blogs on time. This text is dummy and just want to show how much it could render in computer screen with examples",
        optionalImage: "/assets/images/Blogs/blogHeader.webp",        
        date:"April 17,2024"
    },
    {
        id: "3",
        bgImg: "/assets/images/Blogs/b3.webp",
        title: "Redefining-Flexibility-For-Media-and-Entertainment-Companies",
        subDescripation: "This is the subtitle of the first blog. It is just an example to preview the text. This text is written to show how to will look like on computer",
        content: "This is  the body paragraph with preview infomration and so user can able to see and read lastest blogs on time. This text is dummy and just want to show how much it could render in computer screen with examples",
        optionalImage: "/assets/images/Blogs/blogHeader.webp",
        date:"April 30,2024"
    },

]

// interface blogPost {
//     id: string,
//     bgImg: string,
//     title: string,
//     subDescription: string,
//     date: string
// }

export const getTableData: any = () => tableData;

export const addBlog = (blog: { id: string; bgImg: string; title: string; subDescripation:string; content:string; optionalImage?: string; date: string }) => {
  tableData.push(blog);
};