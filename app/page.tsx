import SmoothScroll from "@/components/smooth-scroll";
import { Cursor, Header } from "@/components/pages/global";
import {
  Hero,
  Mission,
  ProductsAndServices,
} from "@/components/pages/landing-page";

export default function Home() {
  return (
    <SmoothScroll>
      <Cursor />
      <div className="relative">
        <div className="absolute top-0 left-0 w-full z-10">
          <Header />
        </div>
        <Hero />
        <Mission />
        <ProductsAndServices />
      </div>

      <main className="main-padding">
        {/* <h1 className="text-9xl font-bold">Welcome to EvonMedics</h1>
        <p className="mt-4">Your health, our priority.</p> */}
      </main>
    </SmoothScroll>
  );
}
