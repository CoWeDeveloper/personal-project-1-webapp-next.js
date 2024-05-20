import CustomerSlider from "./CustomerSlider";

function Customer() {
  return (
    <section className="w-full h-fit bg-[#ecf8fa] pt-5 pb-10 ">
        <div className='container py-5'>

            <h3 className='tracking-wide text-3xl text-black font-black text-center'>OUR CUSTOMERS</h3>
            <p className="text-sm text-center pb-5 text-[#636468]">We are working with amazing companies.

</p>
        <CustomerSlider />
        <div className="flex justify-center pt-5">
          <button className="bg-white border-2 border-[#105AB6] ring-[#105AB6] hover:bg-[#105AB6] text-[#105AB6] 
          text-sm hover:text-sky-100 rounded-lg px-10 py-2 transition-all duration-500 mr-2 font-medium focus:outline-none">Show All</button>
        </div>
        </div>
    </section>
  )
}

export default Customer
