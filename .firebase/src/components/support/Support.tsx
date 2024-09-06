import AniSupport from "./animation/AniSupport";
import { supportData } from "@/data/supportData";

function Support() {
  return (
    <>
      {supportData.map((data: any, index: number) => (
        <section 
        id="Support"
          key={data.id}
          className={`w-full h-fit bg-cover bg-no-repeat bg-center ${
            index % 2 == 0 ? "bg-white" : "bg-[#f5f4fe]"
          }`}
        >
          <div className="max-w-screen-lg mx-auto pt-10 pb-5 overflow-hidden">
          <AniSupport data={data} />
          </div>
        </section>
      ))}
    </>
  );
}

export default Support;