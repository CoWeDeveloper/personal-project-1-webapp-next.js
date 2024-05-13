import { faqData } from "@/data/faqData";

function faq() {
  return (
    <>
      <div className="w-full h-fit bg-white pt-10 pb-10">
        <div className="container lg:px-20 md:lg:px-20 sm:px-10 px-2">
          <div className="max-w-3xl px-3 space-y-2">
            <div className="bg-slate-300 px-2 py-1 w-14 font-semibold text-black   flex justify-center rounded-md">
              FAQ
            </div>

            <div className="space-y-2">
              <h1 className="sm:text-4xl text-4xl  md:text-5xl font-bold tracking-tighter">
                Frequently Asked Questions
              </h1>
              <h2 className="text-gray-500 md:text-xl/relaxed">
                Got a question? We've got answers. If you have some other
                questions, feel free to send us an email to <u className="hover:font-bold cursor-pointer hover:text-lg">info@cloudtenants.com </u>
              </h2>
            </div>

            <div className="ml-2 select-none pt-5 text-sm font-medium">
              {faqData.map((data: any) => (
                <div key={data.id}>
                  <div className="font-semibold">{data.que}?</div>

                  <div className="text-gray-500 mt-2 pb-4 ">
                    <p className="my-2text-base">{data.ans}</p>
                    {data.list.length > 0 && (
                      <ul className="list-disc ml-5 mt-2 font-normal ">
                        {data.list.map((list: any, index: number) => (
                          <li key={list.index}>{list.name}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default faq;
