import { HeroSection, Schedule } from "@/components/demo/index";
import { Toaster } from "@/components/ui/toaster";

function Demo({ params }: { params: { product?: string[] } }) {
  const product: any = params.product
    ? decodeURIComponent(params.product[0])
    : undefined;

  return (
    <>
      <HeroSection key={product || "default"} />
      <Toaster />
      {product ? <Schedule product={product} /> : <Schedule />}
    </>
  );
}

export default Demo;
