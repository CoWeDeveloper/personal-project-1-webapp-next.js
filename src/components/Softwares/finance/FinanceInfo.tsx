import Image from "next/image";
import banner from "../../../../public/assets/images/Software/Finance/finsubbanner.png"
import { financeData } from "@/data/FinanceData";

function FinanceInfo() {
  return (
    <div id="FinanceInfo" className="w-full h-fit bg-white pt-14 pb-10">
      <div className=" container mx-auto lg:px-36">
           <div className="flex justify-center items-center">
           <Image src={banner} alt="banner" width={600} />

           </div>
          <p className=" font-medium pt-12 pb-8 text-justify text-[#636468]" >
          Cloud Tenants’ Finance+ software is designed to address common pain points of the finance department such as cash flow management and invoicing process along with the ERP module and many other features related to finance. Automate your manual finance operations and improve and optimize working capital.

            <br />
            <br />
            It helps in managing the financial transactions and Accounting activities, including General Ledger, Accounts Payable, Accounts Receivable, Cash Management, and Fixed Assets Management.           </p>  
          {financeData.map(( data: any) => (
   <div key={data.id}>
        <h1 className="text-3xl text-black font-extrabold">
            {data.heading}
        </h1>
          <hr className="border-1 text-gray-900 my-2" />
            <div className="flex flex-wrap justify-center gap-4 px-auto text-center pt-7 pb-10">
            {data.cards.map((card: any) => {
                return (
                <div
                key={card.id}
                className="flex-col justify-center items-center py-2  "
                >
                    <Image
                    className="w-14 mx-auto"
                    src={card.url}
                    alt={card.title}
                    width={150}
                    height={100}
                    />
                    <div className="mx-auto  w-[170px]">
                    <h2 className="  px-4 py-1 text-center  text-sm">{card.title}</h2>
                    </div>
                </div>
                );
            })}
            </div>
    </div>
    ))}
      </div>   
    </div>
  )
}

export default FinanceInfo;
