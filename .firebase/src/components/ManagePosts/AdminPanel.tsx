
import Header from "./Header";
import TableContent from "./TableContent";

function AdminPanel() {
  return (
    <>
      <Header margin={"14"} />
      <section className="w-full h-screen pt-10 lg:px-14 md:px-8 sm:px-0 pb-10 bg-white">
      
        <TableContent />
      </section>
    </>
  );
}

export default AdminPanel;
