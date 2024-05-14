import Image from "next/image";
import banner from "../../../../public/assets/images/Software/SnD/sndNHeader.svg"
import { SnDData } from "@/data/SnDData";

function SnDInfo() {
  return (
    <div className="w-full h-fit bg-white pt-14 pb-10">
      <div className=" container mx-auto lg:px-36">
           <div className="flex justify-center items-center">
           <Image src={banner} alt="banner" width={600} />

           </div>
          <p className=" font-medium pt-12 pb-8 text-justify text-[#636468]" >Elevate your business with our Cloud-based and Web-based Sales & Distribution Management solution that give unparalleled advantage to your organization. 
            Optimize your operational efficiency by streamlining your sales processes with improved customer engagement and better insights into your business with our AI Based Dashboards and Real-Time Reporting. 
            Utilize the Cloud-based features with seamless accessibility from anywhere. Cloud Tenants encourage adaptability and empower insightful decision-making.
            
            <br />
            <br />
           Our Sales and Distribution Software provides tools and features to enhance Sales Efficiency, Track Leads, and Opportunities, Manage Customer Relationships, Automate Sales Tasks, and Analyze Sales and Distribution Performance.</p>
         
          {SnDData.map(( data: any) => (
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

export default SnDInfo
