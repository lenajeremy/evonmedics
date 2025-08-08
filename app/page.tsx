import SmoothScroll from "@/components/smooth-scroll";
import { Header } from "@/components/pages/global";
import {
  Careers,
  Hero,
  Mission,
  ProductsAndServices,
  VideoDisplay,
} from "@/components/pages/landing-page";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative">
        <div className="fixed top-0 left-0 w-full z-10">
          <Header variant="default" />
        </div>
        <Hero />
        <Mission />
        <ProductsAndServices />
        <VideoDisplay />
        <Careers />
      </div>
    </SmoothScroll>
  );
}
