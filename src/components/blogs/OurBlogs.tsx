
import OurBlogsHeader from "./blogArticle/animation/OurBlogsHeader";
import OurBlogsContent from "./OurBlogsContent";


function BlogsArticles() {
 



  return (
    <div className='w-full h-fit bg-white'>
      <div className='bg-sky-50  border-sky-200 border-t-8 py-8'>

      <OurBlogsHeader />
              </div>
    
    {/* search */}

      <div className="container md:px-28 sm:px-5 py-14">
      <OurBlogsContent />
      
      </div>
    </div>
  )
}

export default BlogsArticles
