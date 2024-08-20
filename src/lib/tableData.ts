export const tableData = [
    {
        id: "1",
        bgImg: "/assets/images/Blogs/b1.webp",
        author: "Ali Hamza",
        title: "Redefining Flexibility For Media and Entertainment Companies",
        subDescripation: "Lorem the release  more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        content: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  <br/> <br/> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        optionalImage: "/assets/images/Blogs/blogHeader.webp",
        date:"April 10,2024",
    },
    {
        id: "2",
        bgImg: "/assets/images/Blogs/b2.webp",
        author: "Amna Yusuf",        
        title: "Slack Cost With Multicloud Data Protection Solutions",
        subDescripation: "This is the subtitle of the first blog. It is just an example to preview the text. This text is written to show how to will look like on computer",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        optionalImage: "/assets/images/Blogs/blogHeader.webp",
        date:"April 17,2024"
    },
    {
        id: "3",
        bgImg: "/assets/images/Blogs/b3.webp",
        author: "Ibrahim Saleem",
        title: "Get to Secure VPN Before Firewall Runined Your network",
        subDescripation: "This is the subtitle of the first blog. It is just an example to preview the text. This text is written to show how to will look like on computer",
        content: "This is the body paragraph with preview infomration and so user can able to see and read lastest blogs on time. This text is dummy and just want to show how much it could render in computer screen with examples",
        optionalImage: "/assets/images/Blogs/blogHeader.webp",
        date:"April 30,2024"
    },
    {
        id: "4",
        bgImg: "/assets/images/Blogs/b4.webp",
        author: "Ibrahim Saleem",
        title: "Get to CVEs Before They Compromise Your PC",
        subDescripation: "This is the subtitle of the first blog. It is just an example to preview the text. This text is written to show how to will look like on computer",
        content: "This is the body paragraph with preview infomration and so user can able to see and read lastest blogs on time. This text is dummy and just want to show how much it could render in computer screen with examples",
        optionalImage: "/assets/images/Blogs/blogHeader.webp",
        date:"April 30,2024"
    },
    {
        id: "5",
        bgImg: "/assets/images/Blogs/b5.webp",
        author: "Ibrahim Saleem",
        title: "Plan Inferencing Locations to Accelerate Your GenAI",
        subDescripation: "This is the subtitle of the first blog. It is just an example to preview the text. This text is written to show how to will look like on computer",
        content: "This is the body paragraph with preview infomration and so user can able to see and read lastest blogs on time. This text is dummy and just want to show how much it could render in computer screen with examples",
        optionalImage: "/assets/images/Blogs/blogHeader.webp",
        date:"April 30,2024"
    },
    {
        id: "6",
        bgImg: "/assets/images/Blogs/b6.webp",
        author: "Umer Ahmed",
        title: "Ai Anywhere with APEX File Storge For MIcrosoftware Azure",
        subDescripation: "This is the subtitle of the first blog. It is just an example to preview the text. This text is written to show how to will look like on computer",
        content: "This is the body paragraph with preview infomration and so user can able to see and read lastest blogs on time. This text is dummy and just want to show how much it could render in computer screen with examples",
        optionalImage: "/assets/images/Blogs/blogHeader.webp",
        date:"April 30,2024"
    },

];


interface BlogPost {
    id: string;
    bgImg: string;
    author: string;
    title: string;
    subDescripation: string;
    content: string;
    optionalImage: string ;
    date: string;
}
export const getTableData: any = () => tableData;

// Update addBlog function
export const addBlog = (blog: BlogPost) => {
    tableData.push(blog);
};
