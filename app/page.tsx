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
        <Header variant="default" />
        <Hero />
        <Mission />
        <ProductsAndServices />
        <VideoDisplay />
        <Careers />
      </div>
    </SmoothScroll>
  );
}
