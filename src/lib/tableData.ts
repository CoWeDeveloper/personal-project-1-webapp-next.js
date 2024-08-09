export const tableData = [
    {
        id: "1",
        bgImg: "/assets/images/Blogs/b1.webp",
        title: "Redefining Flexibility For Media and Entertainment Companies",
        date:"April 10,2024"
    },
    {
        id: "2",
        bgImg: "/assets/images/Blogs/b2.webp",
        title: "Slack Cost With Multicloud Data Protection Solutions",
        date:"April 17,2024"
    },
    {
        id: "3",
        bgImg: "/assets/images/Blogs/b3.webp",
        title: "Redefining Flexibility For Media and Entertainment Companies",
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

export const addBlog = (blog: { id: string; bgImg: string; title: string; date: string }) => {
  tableData.push(blog);
};