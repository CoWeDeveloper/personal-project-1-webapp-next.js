import AniProduct from "./animation/AniProduct";


function Product() {
  return (
    <>
      <section className="w-full h-fit bg-white relative overflow-hidden ">
        <div className="py-8 px-4 mx-auto  max-w-screen-xl  sm:py-16 lg:px-6">
         < AniProduct />
        </div>
      </section>
    </>
  );
}

export default Product;
