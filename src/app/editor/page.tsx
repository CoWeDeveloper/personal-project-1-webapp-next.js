import BlogEditor from "@/components/blogEditor/BlogEditor";
import { Toaster } from "@/components/ui/toaster"

function Editor() {
  return (
    <div>
      <Toaster />
      <BlogEditor />
    </div>
  )
}

export default Editor;
