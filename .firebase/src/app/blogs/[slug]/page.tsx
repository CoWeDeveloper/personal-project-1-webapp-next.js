import BlogArticle from "@/components/blogs/blogArticle/BlogArticle";
import { Toaster } from "@/components/ui/toaster";
function blogPage() {
  return (
    <>
    <div className="  pt-14">
      <Toaster />
    <BlogArticle />

    </div>
    </>
  )
}

export default blogPage;
