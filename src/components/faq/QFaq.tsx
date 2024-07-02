import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

  import { faqData } from "@/data/faqData";
  
  function QFaq() {
    return (
      <>
      {faqData.map((data: any) => (
                    <Accordion className="font-semibold" key={data.id} type="single" collapsible>
  <AccordionItem value="item-1">
                
    <AccordionTrigger>{data.que}?</AccordionTrigger>
                  {/* <div className="font-semibold">question</div> */}
                   
                  <div className="text-gray-500 mt-1 ">
                    {/* <p className="my-2text-base"></p> */}

    <AccordionContent>
    {data.ans}

                    {data.list.length > 0 && (
                      <ul className="list-disc ml-5 mt-2 font-normal ">
                        {data.list.map((list: any, index: number) => (
                          <li key={list.index}>{list.name}</li>
                        ))}
                      </ul>
                    )}

                    </AccordionContent>
                  </div>
               
                    </AccordionItem>
                    </Accordion>
              ))}
      </>
    )
  }
  
  export default QFaq
  