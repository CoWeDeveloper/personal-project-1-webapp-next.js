import Header from '../ManagePosts/Header';
import Editorsession from './EditorSession';


const BlogEditor = () => {
  
  return (
    <>
      <Header />
      <section className='relative w-full min-h-screen bg-white  flex justify-center items-center'>        
      <Editorsession />
      </section>
    </>
  );
};

export default BlogEditor;
