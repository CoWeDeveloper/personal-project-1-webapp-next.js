import Header from '../ManagePosts/Header';
import Editorsession from './EditorSession';


const BlogEditor = () => {
  
  return (
    <>
      <Header margin={"5"} />
      <section className='relative w-full bg-white flex justify-center items-center'>        
      <Editorsession />
      </section>
    </>
  );
};

export default BlogEditor;
